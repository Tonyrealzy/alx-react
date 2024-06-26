import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "./uiActionTypes";

export const login = (email, password) => ({
  type: LOGIN,
  user: { email, password },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
});

export const loginFailure = () => ({
    type: LOGIN_FAILURE,
});

export const boundLogin = (dispatch) => (email, password) =>
  dispatch(login(email, password));
export const boundLogout = () => () => dispatch(logout());

export const boundDisplayNotificationDrawer = (dispatch) => () =>
  dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = (dispatch) => () =>
  dispatch(hideNotificationDrawer());

export const loginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(login(email, password));
        return fetch('/login-success.json')
        .then(response => response.json())
        .then((data) => dispatch(loginSuccess(data)))
        .catch((error) => dispatch(loginFailure(error)));
    };
};