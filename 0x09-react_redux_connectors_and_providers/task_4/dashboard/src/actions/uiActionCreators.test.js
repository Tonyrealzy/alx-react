import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('UI action creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('login returns correct action', () => {
    const email = 'test@example.com';
    const password = '123456';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout returns correct action', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer returns correct action', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer returns correct action', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

  it('loginRequest success', () => {
    fetchMock.getOnce('/login-success.json', {
      body: { user: { email: 'test@example.com', password: '123456' } },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: '123456' } },
      { type: LOGIN_SUCCESS }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', '123456')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('loginRequest failure', () => {
    fetchMock.getOnce('/login-success.json', 500);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@example.com', password: '123456' } },
      { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest('test@example.com', '123456')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});