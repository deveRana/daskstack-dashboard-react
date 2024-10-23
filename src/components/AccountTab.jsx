import React, { useState } from "react";

const AccountTab = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="mt-10">
      <div className=" mt-2 w-64 bg-white shadow-lg rounded-lg">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg text-[#404040]">Settings</h2>
        </div>
        <ul className="divide-y divide-gray-200">
          <li className="p-4 hover:bg-gray-100 cursor-pointer font-bold flex flex-row items-center">
            <i
              style={{ color: getRandomColor() }}
              class="fa-solid fa-user-gear text-2xl mr-4"
            ></i>
            Manage Account
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer font-bold flex flex-row items-center">
            <i
              style={{ color: getRandomColor() }}
              class="fa-solid fa-key text-2xl mr-4"
            ></i>
            Change Password
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer font-bold flex flex-row items-center">
            <i
              style={{ color: getRandomColor() }}
              class="fa-solid fa-chart-line text-2xl mr-4"
            ></i>
            Activity Log
          </li>
          <li className="p-4 hover:bg-gray-100 cursor-pointer font-bold flex flex-row items-center">
            <i
              style={{ color: getRandomColor() }}
              class="fa-solid fa-right-from-bracket text-2xl mr-4"
            ></i>
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AccountTab;
