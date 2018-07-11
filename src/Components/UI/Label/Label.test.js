import React from 'react';
import { shallow } from 'enzyme';
import Label from './Label';

const setupLabel = (props = {}, state = null) =>{
    const wrapper = shallow(<Label {...props} />);
    if(state) wrapper.setState(state);
    return wrapper;
}; 

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe('Label', ()=>{
    it('renders without crashing',() =>{
        const mountedLabel = setupLabel();
        const labelComponent = findByTestAttr(mountedLabel, "label-component");
        expect(labelComponent.length).toBe(1);
     });
})