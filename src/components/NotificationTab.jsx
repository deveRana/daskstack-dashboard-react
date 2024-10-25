import React, { useState } from "react";

const NotificationTab = () => {
  const notifications = [
    "You have a new message",
    "Your order has been shipped",
    "New comment on your post",
    "Friend request received",
  ];

  const lightColors = [
    "#1E1E2F", // Dark Blue
    "#3F3F6D", // Deep Violet
    "#B28DFF", // Lavender
    "#FFD700", // Gold
    "#C0C0C0", // Silver
    "#FF5733", // Coral
    "#8B4513", // Saddle Brown
    "#4B0082", // Indigo
    "#FF8C00", // Dark Orange
    "#008080", // Teal
  ];

  const getRandomColor = () => {
    console.log(Math.random());
    const randomIndex = Math.floor(Math.random() * lightColors.length);
    return lightColors[randomIndex];
  };

  return (
    <div className="absolute top-14 right-10 z-50">
      <div className=" mt-2 w-64 bg-white shadow-lg rounded-lg">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg text-[#404040]">
            Notifications
          </h2>
        </div>
        <ul className="divide-y divide-gray-200">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <li
                style={{ color: getRandomColor() }}
                key={index}
                className="p-4 hover:bg-gray-100 cursor-pointer font-bold"
              >
                {notification}
              </li>
            ))
          ) : (
            <li className="p-4 text-center">No notifications</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NotificationTab;
