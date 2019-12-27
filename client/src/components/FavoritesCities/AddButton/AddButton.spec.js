import React from 'react';
import AddButton from "./AddButton";
import addButton from "./svg/addButton.svg";

describe(`Add button image`, () => {
    const button = shallow(<AddButton/>);

    it(`Рендеринг картинки`, () => {
        expect(button.find("img").prop("src")).toEqual(addButton);
    });

    it(`отображается корректно`, () => {
        expect(shallowToJson(button)).toMatchSnapshot();
    });

});