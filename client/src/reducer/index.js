const initialState = {
    apiKey: "f77919380546d1f6ef8015d53089ba0e",
    defaultWeather: "New York",
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
            cities[action.cityId - 1] = action.payload;
            return {
                ...state,
                favoritesCities: cities
            };

        case "DELETE_FAVORITE_CITY":
            let city = [...state.favoritesCities];
            city[action.cityId] = {};
            return {
                ...state,
                favoritesCities: city
            };

        default:
            return state;
    }
};

export default reducer;