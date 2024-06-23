import { combineReducers } from "react-redux";
import uiReducer from "./uiReducer";
import courseReducer from "./courseReducer";
import notificationReducer from "./notificationReducer";

export default rootReducer = combineReducers({
  course: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});
