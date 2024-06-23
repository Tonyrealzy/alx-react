import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("uiReducer tests", () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };

  it("should return the initial state", () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it("should return the initial state  when the action SELECT_COURSE is passed", () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE })).toEqual(initialState);
  });

  it("should return the initial state  when the action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true,
    };
    expect(uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual(
      expectedState
    );
    
  });
});
