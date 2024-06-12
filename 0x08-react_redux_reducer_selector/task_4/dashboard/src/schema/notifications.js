import { normalize, schema } from "normalizr";
import * as notificationsData from "../../notifications.json";

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, { idAttribute: "guid" });
const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData.default, [notification]);

export function getAllNotificationsByUser(userId) {
  const userNotifications = [];
  const { notifications, messages } = normalizedData.entities;

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      const contextId = notifications[id].context;
      userNotifications.push(messages[contextId]);
    }
  }
  return userNotifications;
}

export {normalizedData};