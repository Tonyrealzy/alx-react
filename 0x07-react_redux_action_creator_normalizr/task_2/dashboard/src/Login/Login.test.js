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

    it('submit button is disabled by default', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
    });

    it('submit button is enabled when email and password fields are not empty', () => {
        const wrapper = shallow(<Login />);
        wrapper.find('input[name="email"]').simulate('change', { target: { value: 'email' } });
        wrapper.find('input[name="password"]').simulate('change', { target: { value: 'password' } });
        expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
    });
});