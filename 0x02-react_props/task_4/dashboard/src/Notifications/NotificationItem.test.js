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
});