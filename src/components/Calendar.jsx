import React, { useState } from "react";

const Calendar = () => {
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Get the current date
  const today = new Date();

  // State to keep track of the selected month, year, and selected day
  const [currentDate, setCurrentDate] = useState(today);
  const [calendarDays, setCalendarDays] = useState([]); // Initialize with empty days

  // Get the current month and year
  const month = currentDate.getMonth(); // 0 = January, 11 = December
  const year = currentDate.getFullYear();

  // Get the number of days in the current month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Get the first day of the current month (to calculate the starting position)
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Function to initialize the calendar days
  const initializeCalendarDays = () => {
    const daysArray = Array(firstDayOfMonth)
      .fill(null)
      .concat(
        Array.from({ length: daysInMonth }, (_, i) => ({
          day: i + 1,
          selected: false,
        }))
      );

    setCalendarDays(daysArray);
  };

  // Initialize the calendar days on mount
  React.useEffect(() => {
    initializeCalendarDays();
  }, [currentDate]);

  // Function to go to the previous month
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // Function to go to the next month
  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // Month names for display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Handle selecting a day
  const handleDayClick = (dayIndex) => {
    const updatedDays = calendarDays.map((day, index) => {
      if (index === dayIndex) {
        return { ...day, selected: !day.selected }; // Toggle the selected status
      }
      return day;
    });
    setCalendarDays(updatedDays);
  };

  return (
    <div className="max-w-md mx-auto mt-10 border rounded-3xl shadow-lg bg-white">
      {/* Month and Year Display */}
      <div className="flex justify-between items-center mb-4 py-6 px-6 border-b">
        <div className="text-center text-lg font-semibold">
          {monthNames[month]} {year}
        </div>
        <div>
          <button onClick={goToPreviousMonth}>
            <i class="fa-solid fa-chevron-left bg-gray-200 px-2 py-1 rounded-md  border cursor-pointer "></i>
          </button>
          <button className="ml-2" onClick={goToNextMonth}>
            <i class="fa-solid fa-chevron-right bg-gray-200 px-2 py-1 rounded-md border cursor-pointer "></i>
          </button>
        </div>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-2 text-center text-gray-600 font-medium px-6 pt-3">
        {daysOfWeek.map((day) => (
          <p key={day} className="uppercase font-bold text-gray-400 px-2">
            {day}
          </p>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 mt-2 border-b px-6 pb-3">
        {calendarDays.map((day, index) => (
          <p
            key={index}
            onClick={() => day && handleDayClick(index)} // Handle day click
            className={`px-2 py-1 text-center rounded-full cursor-pointer 
              ${day ? "hover:bg-blue-200" : "invisible"} 
              ${day && day.selected ? "bg-blue-500 text-white" : "bg-gray-50"}`}
          >
            {day ? day.day : ""}
          </p>
        ))}
      </div>

      <div className="py-5  px-6 flex flex-col">
        <p className="text-sm text-gray-500">
          <sup>*</sup>You can choose multiple Order type
        </p>
        <button className="mt-4 mx-auto bg-[#4880FF] text-white text-xs font-semibold rounded-md px-6 py-2 hover:bg-[#f5f6fa] hover:text-[#4880FF] border border-transparent hover:border-[#4880FF] ">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Calendar;
