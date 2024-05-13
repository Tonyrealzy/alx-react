import React from "react";
import { shallow } from 'enzyme';
import Header from "../Header/Header";


describe('Header', () => {
    it('renders without crashing', () => {
        shallow(<Header />);
    });
    
    it("renders an image tag and h1 tag", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});