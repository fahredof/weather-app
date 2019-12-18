import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import {
    weatherFetchDataByName,
    weatherFetchDataByCoordinates,
    fetchFavoriteCity,
    deleteFavoriteCity,
    getCities, postCities,
    addToQueue, deleteInQueue
} from "../../actions/index"

import {getCoordinates} from "../../utils/getCoordinates.js";
import {saveToLocalStorage} from "../../utils/saveToLocalStorage";

import "./App.css";
import Header from "../Header";
import DefaultWeather from "../DefaultWeather";
import DetailWeather from "../DetailWeather";
import FavoritesCities from "../FavoritesCities";

const App = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const {
        favoritesCities, idCities, favCities,
        deleteFavoriteCity, fetchByCityName,
        fetchByCoordinates, fetchFavoriteCityByName,
        getCitiesFromDB, postCity, addToQueue, deleteInQueue
    } = props;

    const getDefaultWeather = async () => {
        fetchByCityName("/api/weather");
        //getCitiesFromDB("/api/favorites");
    };

    const getWeatherByCoordinates = async (position) => {
        let latCor = position.coords.latitude;
        let lonCor = position.coords.longitude;
        fetchByCoordinates(`/api/weather/coordinates?lat=${latCor}&lon=${lonCor}`);
    };

    const getWeather = () => {
        getCoordinates(getWeatherByCoordinates, getDefaultWeather);
    };

    getWeather();

    const getWeatherByName = async (cityId, cityName) => {
        fetchFavoriteCityByName(`/api/weather?city=${cityName}`, cityId);
    };

    const deleteCity = (cityId) => {
        deleteFavoriteCity(cityId);
        deleteInQueue(cityId);
    };

    const getLocalState = () => {
        const state = JSON.parse(localStorage.getItem("state"));
        if (state === null)
            return null;
        const citiesQueue = state.cities.map((city) => city.city);
        return citiesQueue;
    };

    const getCities = () => {
        getCitiesFromDB("/api/favorites");
    };

    useEffect(() => {
        if (setIsLoading) {
            console.log("first useEffect ");
            if (favoritesCities !== []) {
                console.log(favoritesCities);
                favoritesCities.map((cityName, index) => {
                    if (cityName.city !== undefined) {
                        if (idCities[index] === undefined) {
                            console.log(index);
                            addToQueue(index);
                            postCity(cityName.city, index);
                        }
                    }
                });
            }
        }
    }, [favoritesCities, isLoading]);

    useEffect(() => {
        if (favCities.length < 3 ) {
            console.log("GSXUHSBQXHBUHXBWHBXHEXHWH");
            console.log(favCities);
            favCities.map((cityName) => {
                console.log(cityName.city);
                console.log(cityName.cityId);
                getWeatherByName(cityName.cityId, cityName.city);
            });
            setIsLoading(false);
        }
    }, [favCities.length]);

    useEffect(() => {
        getCitiesFromDB("/api/favorites");
    }, []);

    return (
        <div className="body">
            <Header
                updateGeolocation={getWeather}
            />
            <DefaultWeather/>
            <DetailWeather/>
            {favoritesCities.map((city, cityId) => (
                <FavoritesCities
                    id={cityId + 1}
                    key={cityId}
                    cityData={city}
                    getWeather={getWeatherByName}
                    deleteCity={deleteCity}
                />
            ))}
        </div>
    );
};

const mapStateToProps = ({favoritesCities, idCities, favCities}) => {
    return {
        favoritesCities,
        idCities,
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
        postCity: (queue, id) => dispatch(postCities(queue, id)),
        addToQueue: (index) => dispatch(addToQueue(index)),
        deleteInQueue: (index) => dispatch(deleteInQueue(index)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);