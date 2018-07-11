import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

/**
 * Factory function to create a ShallowWrappter for the App component.
 * @function setup
 * @param {*} props -- Component props 
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper}
 */
const setupHeader = (props = {}, state = null) => {
    const wrapper = shallow(<Header {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe("Header", () => {

    //Smoke Test
    it('renders without crashing', () => {
        const mountedHeader = setupHeader();
        const headerComponent = findByTestAttr(mountedHeader, 'header-component');
        expect(headerComponent.length).toBe(1);
    });
});