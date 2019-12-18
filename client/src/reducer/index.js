const initialState = {
    mainCity: [],
    favoritesCities: [{}, {}, {}],
    favCities: [],
    idCities: []
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
            //console.log(action.payload);
            return {
                ...state,
                favCities: action.payload
            };

        case "POST_CITIES_SUCCESS":
            return state;

        case "FETCH_FAVORITE_CITY":
            let cities = [...state.favoritesCities];
            console.log(`reducer ${action.cityId}`);
            console.log(action.payload);
            cities[action.cityId - 1] = action.payload;
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

        case "ADD_TO_QUEUE":
            let idAdd = [...state.idCities];
            idAdd[action.index] = action.index;
            return {
                ...state,
                idCities: idAdd
            };

        case "DELETE_IN_QUEUE":
            let idDel = [...state.idCities];
            idDel[action.index] = undefined;
            return {
                ...state,
                idCities: idDel
            };

        default:
            return state;
    }
};

export default reducer;