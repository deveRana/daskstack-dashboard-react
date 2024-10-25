import React, { useState } from "react";
import NotificationTab from "./NotificationTab";
import AccountTab from "./AccountTab";

const Header = ({ setShowSidebar, showSidebar }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const [isAccountTabOpen, setisAccountTabOpen] = useState(false);

  return (
    <>
      <header className="flex flex-row bg-white">
        <div className="flex items-center justify-center w-[17%]">
          <div className="text-xl  font-extrabold ">
            <span className="text-[#4880FF]">Dash</span>Stack
          </div>
        </div>
        <div className="w-[83%] flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center w-[50%]">
            <button
              onClick={() => {
                setShowSidebar(!showSidebar);
              }}
              className="text-[#202224] "
            >
              <i class="fa-solid fa-bars text-2xl"></i>
            </button>
            <div className="w-full relative mx-12">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
              </span>
              <input
                className="w-full py-2 px-10 rounded-3xl border outline-none bg-[#f5f6fa]"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative  mr-8">
              <button
                onClick={() => {
                  setIsNotificationOpen(!isNotificationOpen);
                }}
              >
                <div className="absolute right-0 top-0">
                  <span className="text-xs text-white p-1 bg-[#F93C65] rounded-full">
                    12
                  </span>
                </div>
                <div className="p-2">
                  <i className="fa-solid fa-bell text-2xl text-[#4880FF] " />
                </div>
              </button>
              {isNotificationOpen ? <NotificationTab /> : ""}
            </div>

            <div className="flex flex-row">
              <button className="relative z-10 block w-12 h-12 overflow-hidden rounded-full shadow focus:outline-none">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                  alt="Your avatar"
                />
              </button>

              <div className="flex flex-col items-start justify-center ml-4 ">
                <h2 className="text-[#404040] font-bold text-sm">Moni Roy</h2>
                <p className="text-[#404040] font-semibold text-sm">Admin</p>
              </div>

              <div className="flex flex-col justify-center ml-4">
                <button
                  onClick={() => {
                    setisAccountTabOpen(!isAccountTabOpen);
                  }}
                >
                  <i
                    class={`fa-solid ${
                      isAccountTabOpen ? "fa-chevron-up" : "fa-chevron-down"
                    } text-[#565656] border border-gray-400 p-1 rounded-full`}
                  ></i>
                </button>
              </div>
              {isAccountTabOpen ? <AccountTab /> : ""}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
