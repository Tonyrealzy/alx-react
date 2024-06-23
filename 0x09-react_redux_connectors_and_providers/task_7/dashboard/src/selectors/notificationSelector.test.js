import { fromJS } from "immutable";
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from "./notificationSelector";


describe("Notification Selectors", () => {
  const state = fromJS({
    filter: "URGENT",
    notifications: {
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    },
  });

  it("should return the filter type", () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual("URGENT");
  });

  it("should return the list of notifications", () => {
    const notifications = getNotifications(state).toJS();
    expect(notifications).toEqual({
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      2: { id: 2, type: "urgent", value: "New resume available", isRead: true },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    });
  });

  it("should return the list of unread notifications", () => {
    const unreadNotifications = getUnreadNotifications(state).toJS();
    expect(unreadNotifications).toEqual({
      1: {
        id: 1,
        type: "default",
        value: "New course available",
        isRead: false,
      },
      3: { id: 3, type: "urgent", value: "New data available", isRead: false },
    });
  });
});
