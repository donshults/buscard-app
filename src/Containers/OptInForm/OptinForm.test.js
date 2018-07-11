import React from 'react';
import { shallow } from 'enzyme';
import OptInForm from './OptinForm';

const setupOptinForm = (props = {}, state = null) => {
    const wrapper = shallow(<OptInForm {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
};

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe("OptinForm", () => {
    it('renders without crashing', () => {
        const mountedOptinForm = setupOptinForm();
        const optinFormComponent = findByTestAttr(mountedOptinForm, "optinform-component");
         //console.log(optinFormComponent.debug());
        expect(optinFormComponent.length).toBe(1);
    });
    it('create 5 input fields for form', () => {
        const mountedOptinForm = setupOptinForm();
        const inputComponents = findByTestAttr(mountedOptinForm, "input-component");
        //console.log(inputComponents.debug());
        expect(inputComponents.length).toBe(5);
    });
});