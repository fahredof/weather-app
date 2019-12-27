import React from 'react';
import {App} from "./App";
import {shallowToJson} from "enzyme-to-json";
import {shallow} from "enzyme";

const city = JSON.parse(
    '{"id":479561,"city":"Ufa","temp":"-6","image":"http://openweathermap.org/img/wn/04n@2x.png","wind":3,"cloudiness":"overcast clouds","pressure":1026,"humidity":85,"coordinates":"54.73,55.95"}'
);

describe('App', () => {

    const props = {
        favoritesCities: [{}, {}, {}],
        mainCity: {
            city: "Ufa",
            temp: "-11°C",
            image: "http://openweathermap.org/img/wn/04n@2x.png",
            error: "",
            wind: "Wind 2 m/s",
            overcast: "overcast clouds",
            pressure: "Pressure 1010 hpa",
            humidity: "Humidity 72 %",
            coordinates: "Coordinates [54.73, 55.95]"
        },
        deleteFavoriteCity:()=>{},
        fetchByCityName:()=>{},
        fetchByCoordinates:()=>{},
        fetchFavoriteCityByName:()=>{},
        getCitiesFromDB:()=>{},
        postCity:()=>{},
    };

    const app = shallow(<App {...props}/>);
    test('отображается корректно', () => {
        expect(shallowToJson(app)).toMatchSnapshot();
    });
});