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

    it('does not rerender when updating props with the same list', () => {
        const listNotifications = [
            {id: 1, type: 'default', value: 'New course available'},
            {id: 2, type: 'urgent', value: 'New resume available'}
        ];

        const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'render');
        wrapper.setProps({ listNotifications });

        expect(instance.render).toHaveBeenCalledTimes(1);
    });

    it('rerenders when updating props with a longer list', () => {
        const listNotifications = [
            {id: 1, type: 'default', value: 'New course available'},
            {id: 2, type: 'urgent', value: 'New resume available'}
        ];

        const longerListNotifications = [
            {id: 1, type: 'default', value: 'New course available'},
            {id: 2, type: 'urgent', value: 'New resume available'},
            {id: 3, type: 'default', value: 'New notification available'},
        ];

        const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
        const instance = wrapper.instance();
        jest.spyOn(instance, 'render');
        wrapper.setProps({ longerListNotifications });

        expect(instance.render).toHaveBeenCalledTimes(2);
    });
    
    test('markAsRead function is called with the correct id', () => {
        const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
        const { getByText } = render(<Notifications />);
        const notificationItem = getByText(notifications.value/i);
        notificationItem.click();
        expect(mockConsoleLog).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
        mockConsoleLog.mockRestore();
    });

});