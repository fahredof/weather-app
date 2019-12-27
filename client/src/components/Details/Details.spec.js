import React from 'react';
import Details from "../Details";

describe(`Details of Weather`, () => {
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
        const defCity = shallow(<Details {...props}/>);
        it(`отображается корректно`, () => expect(shallowToJson(defCity)).toMatchSnapshot());
    });

    describe('ошибка при получении города', () => {
        const nextProps = {
            ...props,
            mainCity: mainCityError
        };
        const defCity = shallow(<Details {...nextProps} />);
        it('отображается корректно', () => expect(shallowToJson(defCity)).toMatchSnapshot());
    });
});