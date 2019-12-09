import React from 'react';
import renderer from 'react-test-renderer';
import FancyButton from "../components/FancyButton";

describe('FancyButton component', () =>{
    test('snapshot', () =>{
        const component = renderer.create(
            <FancyButton onClick={() => 0}>
                Hello
            </FancyButton>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});