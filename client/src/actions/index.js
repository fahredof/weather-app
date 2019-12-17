import { parseData} from "../utils/parseData";

// Fetch cities
export function weatherFetchDataByNameSuccess(payload) {
    return {
        type: "WEATHER_FETCH_DATA_BY_NAME_SUCCESS",
        payload
    }
}

export function weatherFetchDataByName(url) {
    return (dispatch) => {
        fetch(url)
            .then(data => data.json())
            .then(data => parseData(data))
            .then(response => dispatch(weatherFetchDataByNameSuccess(response)))
    };
}

export function weatherFetchDataByCoordinatesSuccess(payload) {
    return {
        type: "WEATHER_FETCH_DATA_BY_COORDINATES_SUCCESS",
        payload
    }
}

export function weatherFetchDataByCoordinates(url) {
    return (dispatch) => {
        fetch(url)
            .then(data => data.json())
            .then(data => parseData(data))
            .then(response => dispatch(weatherFetchDataByCoordinatesSuccess(response)))
    };
}

export function fetchFavoriteCitySuccess(cityId, payload) {
    return {
        type: "FETCH_FAVORITE_CITY",
        cityId,
        payload
    };
}

export function fetchFavoriteCity(url, cityId) {
    return (dispatch) => {
        fetch(url)
            .then(data => data.json())
            .then(data => parseData(data))
            .then(response => dispatch(fetchFavoriteCitySuccess(cityId, response)))
    };
}

// Work with DataBase
export function getCitiesSuccess(payload) {
    return {
        type: "GET_CITIES_SUCCESS",
        payload
    }
}

export function getCities(url) {
    return (dispatch) => {
        fetch(url)
            .then(data => data.json())
            //then(data => console.log(data))
            .then(response => dispatch(getCitiesSuccess(response)))
    };
}

export function postCitiesSuccess() {
    return {
        type: "POST_CITIES_SUCCESS"
    }
}

export function postCities(queue) {
    let cities = queue.map((data, index) => ({
        key: index,
        city: data.city
    }));
    return (dispatch) => {
        fetch('/api/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                cities: cities,
                cityId: 0
            })
        })
            .then(dispatch(postCitiesSuccess()))
            .catch(err => console.log(err))
    };
}


// OLD
/*export const fetchFavoriteCitySuccess = (cityId, payload) => {
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
};*/

export const deleteFavoriteCity = (cityId) => {
    return {
        type: "DELETE_FAVORITE_CITY",
        cityId
    };
};


/////////////////////////
export function personsFetchDataSuccess(persons) {
    return {
        type: "PERSONS_FETCH_DATA_SUCCESS",
        persons
    }
}

export function personsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => response.json())
            .then(data => console.log(data))
            .then(persons => dispatch(personsFetchDataSuccess(persons)))
    }
}