import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";


describe('NotificationItem', () => {
    it('renders without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('renders correct type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test"/>);
        expect(wrapper.props()['data-notification-type']).toBe('default');
        expect(wrapper.text()).toBe('test');
    });

    it('renders correct html prop', () => {
        const html = { __html: '<u>test</u>' };
        const wrapper = shallow(<NotificationItem html={html}/>);
        expect(wrapper.props().dangerouslySetInnerHTML).toEqual(html);
    });

    it('renders "No new notification for now" message when listNotifications is empty', () => {
      const wrapper = shallow(<Notifications listNotifications={[]} />);
      expect(wrapper.text()).toContain('No new notification for now');
    });
    
    it('renders notification items when listNotifications contains elements', () => {
      const notifications = [
        { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'Notification 1' },
        { id: 2, html: { __html: 'Notification 2' }, type: 'urgent', value: 'Notification 2' }
      ];
      const wrapper = shallow(<Notifications listNotifications={notifications} />);
      expect(wrapper.find('.notification-item')).toHaveLength(2);
    });
    
    it('renders notification items correctly with the right content', () => {
      const notifications = [
        { id: 1, html: { __html: 'Notification 1' }, type: 'default', value: 'Notification 1' },
        { id: 2, html: { __html: 'Notification 2' }, type: 'urgent', value: 'Notification 2' }
      ];
      const wrapper = shallow(<Notifications listNotifications={notifications} />);
      expect(wrapper.contains('Notification 1')).toBe(true);
      expect(wrapper.contains('Notification 2')).toBe(true);
    });
    
    it('renders correctly if listNotifications is not passed', () => {
      const wrapper = shallow(<Notifications />);
      expect(wrapper.text()).toContain('No new notification for now');
    });
});