import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner';

const setupSpinner= (props = {}, state = null) => {
    const wrapper = shallow(<Spinner {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe("Spinner", () => {
    it('renders without crashing', ()=>{
        const mountedSpinner = setupSpinner();
        const spinnerComponent = findByTestAttr(mountedSpinner, "spinner-component");
        expect(spinnerComponent.length).toBe(1);

    });
});