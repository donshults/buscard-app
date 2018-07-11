import React from 'react';
import { shallow } from 'enzyme';
import VideoCard from './VideoCard';

const setupVideoCard= (props = {}, state = null) => {
    const wrapper = shallow(<VideoCard {...props} />);
    if (state) wrapper.setState(state);
    return wrapper;
}
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

describe("Video Card", () => {
    it('renders without crashing', ()=>{
        const mountedVideoCard = setupVideoCard();
        const videoCardComponent = findByTestAttr(mountedVideoCard, "videocard-component");
        expect(videoCardComponent.length).toBe(1);

    });
});