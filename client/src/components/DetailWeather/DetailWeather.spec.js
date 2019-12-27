import React from 'react';
import {DetailWeather} from "./DetailWeather";

describe(`Details`, () => {
    const mainCity = {
        wind: `Wind 3 m/s`,
        overcast: `overcast clouds`,
        pressure: `Pressure 1011 hpa`,
        humidity: `Humidity 66 %`,
        coordinates: `Coordinates [54.73, 55.95]`,
    };
    const mainCityError = {
        wind: ``,
        overcast: ``,
        pressure: ``,
        humidity: ``,
        coordinates: ``,
    };
    const props = {
        mainCity
    };

    describe(`отображение города`, () => {
        const defCity = shallow(<DetailWeather {...props}/>);
        it(`отображается корректно`, () => expect(shallowToJson(defCity)).toMatchSnapshot());
    });

    describe('ошибка при получении города', () => {
        const nextProps = {
            ...props,
            mainCity: mainCityError
        };
        const defCity = shallow(<DetailWeather {...nextProps} />);
        it('отображается корректно', () => expect(shallowToJson(defCity)).toMatchSnapshot());
    });
});