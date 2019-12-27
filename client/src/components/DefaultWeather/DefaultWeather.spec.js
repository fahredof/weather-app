import React from 'react';
import DefaultWeather from "./DefaultWeather";

describe(`DefaultWeather`, () => {
    const mainCity = {
        city: `Ufa`,
        image: `https://openweathermap.org/img/wn/04n@2x.png`,
        temp: '-11'
    };
    const mainCityError = {
        city: ``,
        image: ``,
        temp: ''
    };
    const props = {
        mainCity
    };

    describe(`отображение города`, () => {
        const defCity = shallow(<DefaultWeather {...props}/>);
        it(`отображается корректно`, () => expect(shallowToJson(defCity)).toMatchSnapshot());
    });

    describe('ошибка при получении города', () => {
        const nextProps = {
            ...props,
            mainCity: mainCityError
        };
        const defCity = shallow(<DefaultWeather {...nextProps} />);
        it('отображается корректно', () => expect(shallowToJson(defCity)).toMatchSnapshot());
    });
});