import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import {
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from "./notificationActionTypes";

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});

export const setLoadingState = (isLoading) => ({
  type: SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (notifications) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});

export const fetchNotifications = () => (dispatch) => {
  dispatch(setLoadingState(true));

  fetch("/notifications.json")
    .then((response) => response.json())
    .then((data) => {
      dispatch(setNotifications(data));
      dispatch(setLoadingState(false));
    })
    .catch(() => {
      dispatch(setLoadingState(false));
    });
};

export const boundMarkAsRead = (dispatch) => (index) =>
  dispatch(markAsAread(index));

export const boundSetNotificationFilter = (dispatch) => (filter) =>
  dispatch(setNotificationFilter(filter));
