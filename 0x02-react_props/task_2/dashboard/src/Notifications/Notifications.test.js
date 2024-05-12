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
});