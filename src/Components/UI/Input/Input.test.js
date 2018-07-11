import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

const setupInput = (props = {}, state = null) =>{
    const wrapper = shallow(<Input {...props} />);
    if(state) wrapper.setState(state);
    return wrapper;
}; 

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe("Input", () => {
    it('renders without crashing', ()=>{
        
        const mountedInput = setupInput();
        const inputComponent = findByTestAttr(mountedInput, "input-component");
        expect(inputComponent.length).toBe(1); 

    });
});