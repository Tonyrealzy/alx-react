import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';


describe('App Component', () => {
    it('renders without crashing', () => {
        shallow(<App />);
    });

    it('contains the Notifications component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Notifications).exists()).toBe(true);
    });

    it('contains the Login component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Login).exists()).toBe(true);
    });

    it('contains the Header component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Header).exists()).toBe(true);
    });

    it('contains the Footer component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Footer).exists()).toBe(true);
    });

    it('displays CourseList when isLoggedIn is true', () => {
        const wrapper = shallow(<App isLoggedIn={true}/>);
        expect(wrapper.find(Login)).toHaveLength(0);
        expect(wrapper.find(CourseList)).toHaveLength(1);
    });

    it('does not display CourseList when isLoggedIn is false', () => {
        const wrapper = shallow(<App isLoggedIn={false}/>);
        expect(wrapper.find(Login)).toHaveLength(1);
        expect(wrapper.find(CourseList)).toHaveLength(0);
    });
});