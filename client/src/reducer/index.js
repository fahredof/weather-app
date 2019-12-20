const initialState = {
    mainCity: [],
    favoritesCities: [{}, {}, {}],
    favCities: []
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "WEATHER_FETCH_DATA_BY_NAME_SUCCESS":
            return {
                ...state,
                mainCity: action.payload
            };

        case "WEATHER_FETCH_DATA_BY_COORDINATES_SUCCESS":
            return {
                ...state,
                mainCity: action.payload
            };

        case "GET_CITIES_SUCCESS":
            return {
                ...state,
                favCities: action.payload
            };

        case "POST_CITIES_SUCCESS":
            return state;

        case "FETCH_FAVORITE_CITY":
            let cities = [...state.favoritesCities];
            cities[action.cityId] = action.payload;
            return {
                ...state,
                favoritesCities: cities
            };

        case "DELETE_FAVORITE_CITY_SUCCESS":
            let city = [...state.favoritesCities];
            city[action.payload] = {};
            return {
                ...state,
                favoritesCities: city
            };

        default:
            return state;
    }
};

export default reducer;