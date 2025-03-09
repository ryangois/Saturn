import React from "react";
import "./Notifications.css";

function Notifications({ notifications }) {
  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="notification-card">
            <p className="notification-message">{notification.message}</p>
            <p className="notification-timestamp">{notification.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;