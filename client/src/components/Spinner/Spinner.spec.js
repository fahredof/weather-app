import React from 'react';
import Spinner from './Spinner';

describe(`Spinner`, () => {
    const spinner = shallow(<Spinner/>);

    it(`Содержит класс: loader`, () => {
        expect(spinner.hasClass(`loader`)).toBeTruthy();
    });

    it(`отображается корректно`, () => {
        expect(shallowToJson(spinner)).toMatchSnapshot();
    });

});