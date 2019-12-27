import React from 'react';
import InputText from "./InputText";

describe(`Input`, () => {
    const props = {
        onChangeInput: () => {},
        value: undefined,
        onClickAddCity: () => {}
    };

    describe(`пустая строка`, () => {
        const input = shallow(<InputText {...props} />);
        it (`отображается корректно`, () => {
            expect(shallowToJson(input)).toMatchSnapshot();
        });
    });

    describe(`строка с названием города`, () => {
        const nextProps = {
            ...props,
            value: `Ufa`
        };
        const input = shallow(<InputText {...nextProps} />);
        it (`отображается корректно`, () => {
            expect(shallowToJson(input)).toMatchSnapshot();
        });
    });
});