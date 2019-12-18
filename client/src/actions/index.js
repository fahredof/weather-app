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
        console.log(cityId);
        console.log("fetchFavoriteCity");
        fetch(url)
            .then(data => data.json())
            .then(data => parseData(data))
            .then(response => dispatch(fetchFavoriteCitySuccess(cityId, response)))
            .catch(error => console.log(error))
    };
}

// Work with DataBase
export function getCitiesSuccess(payload) {
    //console.log(payload);
    return {
        type: "GET_CITIES_SUCCESS",
        payload
    }
}

export function getCities(url) {
    return (dispatch) => {
        fetch(url)
            .then(data => data.json())
            .then(response => dispatch(getCitiesSuccess(response)))
    };
}
/*export function getCities(url) {
    return (dispatch) => {
        fetch(url)
            .then(data => data.json())
            .then(data => console.log(data))
            .then( => dispatch(getCitiesSuccess(1)))
    };
}*/

export function postCitiesSuccess() {
    return {
        type: "POST_CITIES_SUCCESS"
    }
}

export function postCities(cityName, id) {
    return (dispatch) => {
        if (cityName !== undefined) {
            fetch('/api/favorites', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    cityId: id,
                    city: cityName
                })
            })
                .then(dispatch(postCitiesSuccess()))
                .catch(err => console.log(err));
        }
    }
}

export function deleteFavoriteCitySuccess(payload) {
    return {
        type: "DELETE_FAVORITE_CITY_SUCCESS",
        payload
    }
}

export function deleteFavoriteCity(cityId) {
    return (dispatch) => {
        fetch(`/api/favorites?cityId=${cityId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        dispatch(deleteFavoriteCitySuccess(cityId));
    };
}

export const addToQueue = (index) => {
    return {
        type: "ADD_TO_QUEUE",
        index
    }
};

export const deleteInQueue = (index) => {
    return {
        type: "DELETE_IN_QUEUE",
        index
    }
};
/*export const deleteFavoriteCity = (cityId) => {
    return {
        type: "DELETE_FAVORITE_CITY",
        cityId
    };
};*/
