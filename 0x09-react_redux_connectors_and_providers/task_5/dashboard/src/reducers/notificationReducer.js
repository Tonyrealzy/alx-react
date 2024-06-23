import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";
import { fromJS, Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

const initialState = {
  notifications: Map(),
  filter: "DEFAULT",
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.set(
        "notifications",
        fromJS(normalizedData.entities.notifications)
      );
    case MARK_AS_READ:
      return state.set(["notifications", String(action.index), "isRead"], true);
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter);
    case SET_LOADING_STATE:
      return state.set("notifications", fromJS(action.notifications));
    default:
      return state;
  }
};

export default notificationReducer;
