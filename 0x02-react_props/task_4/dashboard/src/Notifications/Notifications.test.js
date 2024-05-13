import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notifications', () => {
    it('renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('renders three NotificationItem elements', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications displayDrawer />);
        const firstNotificationItem = wrapper.find(NotificationItem).first();
        expect(firstNotificationItem.props().html).toEqual({ __html: '<strong>Urgent requirement</strong>'});
    });

    it('displays menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('does not display Notifications when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('displays menu item when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('displays Notifications when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
    });
});