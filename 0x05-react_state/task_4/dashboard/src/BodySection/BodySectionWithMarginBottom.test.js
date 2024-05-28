import React from "react";
import { shallow } from 'enzyme';
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
    it('renders correctly a BodySection component and that the props are passed correctly to the child component', () => {
        shallow(
        <BodySectionWithMarginBottom title="test title">
            <p>test children node</p>
        </BodySectionWithMarginBottom>
        );

        const bodySection = wrapper.find(BodySection);
        expect(bodySection.length).toBe(1);
        expect(bodySection.prop('title')).toBe('test title');
        expect(bodySection.prop('children').type).toBe('p');
        expect(bodySection.prop('children')).toBe('test children node');
        expect(wrapper.find('bodySectionWithMargin').length).toBe(1);
    });
});