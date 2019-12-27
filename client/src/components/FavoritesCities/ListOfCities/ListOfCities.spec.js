import React from 'react';
import ListOfCities from "./ListOfCities";
import crossButton from "./svg/crossButton.svg";

describe(`List of Cities`, () => {
    const mainCity = {
        city: `Ufa`,
        image: `https://openweathermap.org/img/wn/04n@2x.png`,
        temp: `-11`,
        error: ``
    };
    const mainCityError = {
        error: `The server responded with a status of 404`
    };
    const props = {
        cityData: mainCity
        //onClickDelete: () => {}
    };

    describe(`отображение города`, () => {
        const city = shallow(<ListOfCities {...props}/>);
        it(`отображается корректно`, () => expect(shallowToJson(city)).toMatchSnapshot());
    });

    describe('ошибка при получении города', () => {
        const nextProps = {
            ...props,
            cityData: mainCityError
        };
        const city = shallow(<ListOfCities {...nextProps} />);
        it('отображается корректно', () => expect(shallowToJson(city)).toMatchSnapshot());
    });

    describe('загрузка', () => {
        const nextProps = {
            ...props,
            cityData: {}
        };
        const defCity = shallow(<ListOfCities {...nextProps} />);
        it('отображается корректно', () => expect(shallowToJson(defCity)).toMatchSnapshot());
    });

    describe(`Cross button image`, () => {
        const nextProps = {
            ...props,
            cityData: mainCityError
        };
        const button = shallow(<ListOfCities {...nextProps}/>);

        it(`Рендеринг картинки`, () => {
            expect(button.find("img").prop("src")).toEqual(crossButton);
        });

    });
});