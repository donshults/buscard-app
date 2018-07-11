import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const setupButton = (props = {}, state = null) => {
    const wrapper = shallow(<Button {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe("Button", () => {
    it('renders without crashing', ()=>{
        const mountedButton = setupButton();
        const buttonComponent = findByTestAttr(mountedButton, "button-component");
        expect(buttonComponent.length).toBe(1); 

    });
});