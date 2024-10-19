import React from "react";
import { sidebarMenu1, sidebarMenu2, sidebarMenu3 } from "../data/data";
import SideBarMenu from "./SideBarMenu";
const Sidebar = () => {
  return (
    <div className="w-[17%] min-h-screen flex flex-col antialiased bg-gray-50 text-gray-800">
      <div className="flex flex-col top-0 left-0 w-full bg-white h-full border-r">
        <div className="overflow-x-hidden flex-grow  no-scrollbar overflow-y-auto">
          <ul className="flex flex-col py-4 space-y-1">
            {sidebarMenu1.map((ele) => {
              return <SideBarMenu ele={ele} icon={ele.icon} />;
            })}

            <div className="py-3">
              <hr />
            </div>

            {sidebarMenu2.map((ele) => {
              return <SideBarMenu ele={ele} icon={ele.icon} />;
            })}

            <div className="py-3">
              <hr />
            </div>

            {sidebarMenu3.map((ele) => {
              return <SideBarMenu ele={ele} icon={ele.icon} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
