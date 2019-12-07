import { fetchByCity, fetchByCoordinates } from "../utils/fetchWeather";
import { parseData} from "../utils/parseData";

export const weatherFetchDataByNameSuccess = (payload) => {
    return {
        type: "WEATHER_FETCH_DATA_BY_NAME_SUCCESS",
        payload
    }
};

export const weatherFetchDataByName = (apiKey, cityName) => {
    return async function (dispatch) {
        fetchByCity(apiKey, cityName)
            .then(data => parseData(data))
            .then(response => dispatch(weatherFetchDataByNameSuccess(response)))
    };
};

export const weatherFetchDataByCoordinatesSuccess = (payload) => {
    return {
        type: "WEATHER_FETCH_DATA_BY_COORDINATES_SUCCESS",
        payload
    }
};

export const weatherFetchDataByCoordinates = (apiKey, latCor, lonCor) => {
    return async function (dispatch) {
        fetchByCoordinates(apiKey, latCor, lonCor)
            .then(data => parseData(data))
            .then(response => dispatch(weatherFetchDataByCoordinatesSuccess(response)))
    };
};

export const fetchFavoriteCitySuccess = (cityId, payload) => {
    return {
        type: "FETCH_FAVORITE_CITY",
        cityId,
        payload
    };
};

export const fetchFavoriteCity = (cityId, apiKey, cityName) => {
    return async function (dispatch) {
        fetchByCity(apiKey, cityName)
            .then(data => parseData(data))
            .then(response => dispatch(fetchFavoriteCitySuccess(cityId, response)))
    };
};

export const deleteFavoriteCity = (cityId) => {
    return {
        type: "DELETE_FAVORITE_CITY",
        cityId
    };
};