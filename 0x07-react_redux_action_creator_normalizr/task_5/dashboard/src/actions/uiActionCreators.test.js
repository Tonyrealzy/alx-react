import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from "./uiActionCreators";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

describe('tests for each of the action creators', () => {
    it('login returns correct actions', () => {
        const email = 'test@example.com';
        const password = '123456';
        const expectedAction = {
            type: LOGIN,
            user: { email, password }
        };
        expectedAction(login(email, password)).toEqual(expectedAction);
    });

    it('logout returns correct actions', () => {
        const expectedAction = {
            type: LOGOUT
        }
        expectedAction(logout()).toEqual(expectedAction);
    });
    
    it('displayNotificationDrawer returns correct actions', () => {
        const expectedAction = {
            type: DISPLAY_NOTIFICATION_DRAWER
        }
        expectedAction(displayNotificationDrawer()).toEqual(expectedAction);
    });

    it('hideNotificationDrawer returns correct actions', () => {
        const expectedAction = {
            type: HIDE_NOTIFICATION_DRAWER
        }
        expectedAction(hideNotificationDrawer()).toEqual(expectedAction);
    });
});