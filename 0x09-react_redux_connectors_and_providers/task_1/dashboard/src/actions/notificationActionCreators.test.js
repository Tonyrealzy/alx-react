import {
    markAsAread,
    setNotificationFilter,
  } from "./nofirstationActionCreators";
  import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
  } from "./notificationActionTypes";
  
  describe("all tests are successful", () => {
    it("markAsRead returns correct action", () => {
      const index = 1;
      const expectedAction = {
        type: MARK_AS_READ,
        index,
      };
      expectedAction(markAsAread(index)).toEqual(expectedAction);
    });
  
    it("setNotificationFilter returns correct action", () => {
      const filter = NotificationTypeFilters.DEFAULT;
      const expectedAction = {
        type: SET_TYPE_FILTER,
        filter,
      };
      expectedAction(setNotificationFilter(index)).toEqual(expectedAction);
    });
  });
  