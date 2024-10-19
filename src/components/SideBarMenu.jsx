import React, { useEffect, useState } from "react";

const SideBarMenu = ({ ele, icon }) => {
  const [active, setActive] = useState(false);

  return (
    <li className="relative flex flex-row items-center justify-center my-2">
      <a
        href="#"
        className={`w-[200px] outline-none peer py-3 flex flex-row items-center justify-start focus:outline-none  border-l-4 border-transparent  pr-6 ${
          ele.state
            ? "bg-[#4880FF] text-white rounded-lg"
            : "text-black hover:bg-gray-50  hover:text-gray-800"
        } `}
      >
        <span className="ml-6 w-4  inline-flex justify-center items-center">
          <i className={`${icon}`}></i>
        </span>
        <span className="ml-4 text-sm tracking-wide truncate font-semibold">
          {ele.title}
        </span>
      </a>
      <span
        className={`absolute w-1 h-full ${
          ele.state ? "bg-[#4880FF]" : " peer-hover:bg-[#4880FF]"
        } top-0 left-0 z-50 rounded-tr-lg rounded-br-lg`}
      ></span>
    </li>
  );
};

export default SideBarMenu;