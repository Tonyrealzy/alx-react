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
        const TestComponent = WithLogging(() => <p/>);
        const wrapper = mount(<TestComponent/>);

        expect(consoleSpy).toHaveBeenCalledWith('Component Component is mounted');
        wrapper.unmount();
        expect(consoleSpy).toHaveBeenCalledWith('Component Component is going to unmount');
    });

    it('logs "Login" on mount and unmount when wrapped element is a React component', () => {
        const LoginWithLogging = WithLogging(Login);
        const wrapper = mount(<LoginWithLogging/>);

        expect(consoleSpy).toHaveBeenCalledWith('Login Login is mounted');
        wrapper.unmount();
        expect(consoleSpy).toHaveBeenCalledWith('Login Login is going to unmount');
    });
});