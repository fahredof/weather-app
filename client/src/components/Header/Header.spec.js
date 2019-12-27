import React from 'react';
import Header from "./Header";
import icon from "./svg/icon.svg";

describe(`Header image`, () => {
    const header = shallow(<Header/>);

    it(`Содержит класс: header`, () => {
        expect(header.hasClass(`header`)).toBeTruthy();
    });

    it(`Рендеринг картинки`, () => {
        expect(header.find("img").prop("src")).toEqual(icon);
    });

    it(`отображается корректно`, () => {
        expect(shallowToJson(header)).toMatchSnapshot();
    });

});