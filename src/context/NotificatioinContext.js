"use client";
import { createContext, useContext, useEffect, useState } from "react";

export const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const notificationTimeouts = notifications.map((notification) => {
      return setTimeout(() => {
        removeNotification(notification.id);
      }, 3000);
    });

    return () => {
      notificationTimeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [notifications]);

  const addNotification = (message, status) => {
    const newNotification = { id: Date.now(), message, status };
    setNotifications([...notifications, newNotification]);
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
