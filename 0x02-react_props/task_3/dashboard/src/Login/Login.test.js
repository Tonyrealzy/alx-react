import React from "react";
import { shallow } from 'enzyme';
import Login from "../Login/Login";


describe('Login', () => {
    it('renders without crashing', () => {
        shallow(<Login />);
    });
    
    it('renders two input and label tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});