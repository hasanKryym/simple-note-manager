"use client";
import React, { useContext } from "react";
import "./Notification.css";
import { useNotification } from "@/context/NotificatioinContext";

const Notification = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`notification ${notification.status}`}
        >
          <p>{notification.message}</p>
          <button onClick={() => removeNotification(notification.id)}>
            Dismiss
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notification;
