import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from '../Login/Login';
import WithLogging from './WithLogging';

describe('WithLogging Component', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('logs "Component" on mount and unmount when wrapped element is pure HTML', () => {
        const TestComponent = WithLogging(() => )
    });
});