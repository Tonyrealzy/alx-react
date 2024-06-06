import React from 'react';
import { mount, shallow } from 'enzyme';
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

    it('default state for displayDrawer is false', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.state().displayDrawer).toBe(false);
    });

    it('handleDrawer sets displayDrawer to true', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state().displayDrawer).toBe(true);
    });

    it('handleHideDrawer sets displayDrawer to false', () => {
        const wrapper = shallow(<App />);
        wrapper.instance().handleDisplayDrawer();
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state().displayDrawer).toBe(false);
    });
});

test('pressing ctrl+h calls logout function and displays alert', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    const { getByRole } = render(<App isLoggedIn={true} logOut={logOutMock} />);

    fireEvent.keyDown(getByRole('button'), { key: 'h', ctrlKey: true });

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    alertMock.mockRestore();
});

describe('App component tests', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App/>);
    });

    it('should render without crashing', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('should update state correctly when logOut is called', () => {
        const wrapper = mount(<App/>);
        const instance = wrapper.instance();

        instance.state.isLoggedIn = true;
        instance.state.user = { email: email };
        wrapper.update();

        instance.logOut();
        expect(instance.state.isLoggedIn).toBe(false);
        expect(instance.state.user).toBe(null);
    });

    it('should update state correctly when logIn is called', () => {
        const wrapper = mount(<App/>);
        const instance = wrapper.instance();

        instance.logIn(email);
        expect(instance.state.isLoggedIn).toBe(true);
        expect(instance.state.user.email).toBe(email);
    });

    it('should mark notification as read correctly', () => {
        const wrapper = shallow(<App/>);
        wrapper.setState({
            listNotifications: []
        });
        wrapper.instance().markNotificationAsRead(0);
        expect(wrapper.state('listNotifications')).toEqual([]);
    });
});