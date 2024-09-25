import React, { useState } from "react";
import data from "./data.json";
export default function Notifications() {
  const [notifications, setNotifications] = useState(data);
  const unreadCount = notifications.filter(
    (item) => item.isRead === false
  ).length;

  const read = (id) => {
    const updatedNotifications = notifications.map((notification) => {
      console.log(id);
      console.log(notifications);
      if (notification.id === id) {
        return { ...notification, isRead: true };
      }
      return notification; // Return the notification if it doesn't match the id
    });
    setNotifications(updatedNotifications);
  };
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      if (notification) {
        return { ...notification, isRead: true };
      }
      return notification; // Return the notification if it doesn't match the id
    });
    setNotifications(updatedNotifications);
  };
  return (
    <>
      <h1 onClick={markAllAsRead}>all read</h1>
      <h1> {unreadCount}</h1>
      {notifications.map((notification) => (
        <div
          onClick={() => {
            read(notification.id);
          }}
          className={`border flex mt-20 ${
            !notification.isRead ? "bg-red-500 " : ""
          }`}
          key={notification.id}
        >
          <div className="flex">
            <img src={notification.profilePic} alt="" />
            {!notification.isRead ? (
              <p className="bg-green-500 h-10 w-10"></p>
            ) : null}
          </div>
          <div>
            <p> {notification.username}</p>
            <p> {notification.action}</p>
            <p> {notification.time}</p>
          </div>
        </div>
      ))}
    </>
  );
}
