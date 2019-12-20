import React, {useEffect} from "react";
import {connect} from "react-redux";

import {
    weatherFetchDataByName,
    weatherFetchDataByCoordinates,
    fetchFavoriteCity,
    deleteFavoriteCity,
    getCities, postCities
} from "../../actions/index"

import {getCoordinates} from "../../utils/getCoordinates.js";

import "./App.css";
import Header from "../Header";
import DefaultWeather from "../DefaultWeather";
import DetailWeather from "../DetailWeather";
import FavoritesCities from "../FavoritesCities";

const App = (props) => {

    const {
        favoritesCities, favCities,
        deleteFavoriteCity, fetchByCityName,
        fetchByCoordinates, fetchFavoriteCityByName,
        getCitiesFromDB, postCity
    } = props;

    const getDefaultWeather = async () => {
        fetchByCityName("/api/weather");
    };

    const getWeatherByCoordinates = async (position) => {
        let latCor = position.coords.latitude;
        let lonCor = position.coords.longitude;
        fetchByCoordinates(`/api/weather/coordinates?lat=${latCor}&lon=${lonCor}`);
    };

    const getWeather = () => {
        getCoordinates(getWeatherByCoordinates, getDefaultWeather);
    };

    const getWeatherByName = async (cityId, cityName) => {
        fetchFavoriteCityByName(`/api/weather?city=${cityName}`, cityId);
    };

    const deleteCity = (cityId) => {
        deleteFavoriteCity(cityId);
    };

    useEffect(() => {
        getWeather();
    }, []);

    useEffect(() => {
        getCitiesFromDB("/api/favorites");
    }, []);

    useEffect(() => {
        if (favCities.length < 4) {
            favCities.map((cityName) => {
                if (favCities[cityName.cityId] !== {}) {
                    getWeatherByName(cityName.cityId, cityName.city);
                }
            });
        }
    }, [favCities.length]);

    useEffect(() => {
        favoritesCities.map((cityName, index) => {
            if (cityName.city !== undefined) {
                postCity(cityName.city, index);
            }
        });
    }, [favoritesCities]);

    return (
        <div className="body">
            <Header
                updateGeolocation={getWeather}
            />
            <DefaultWeather/>
            <DetailWeather/>
            {favoritesCities.map((city, cityId) => (
                <FavoritesCities
                    id={cityId}
                    key={cityId}
                    cityData={city}
                    getWeather={getWeatherByName}
                    deleteCity={deleteCity}
                />
            ))}
        </div>
    );
};

const mapStateToProps = ({favoritesCities, favCities}) => {
    return {
        favoritesCities,
        favCities
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchByCityName: url => dispatch(weatherFetchDataByName(url)),
        fetchByCoordinates: (apiKey, latCor, lonCor) => dispatch(weatherFetchDataByCoordinates(apiKey, latCor, lonCor)),
        fetchFavoriteCityByName: (url, cityId) => dispatch(fetchFavoriteCity(url, cityId)),
        deleteFavoriteCity: cityId => dispatch(deleteFavoriteCity(cityId)),
        getCitiesFromDB: url => dispatch(getCities(url)),
        postCity: (queue, id) => dispatch(postCities(queue, id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);