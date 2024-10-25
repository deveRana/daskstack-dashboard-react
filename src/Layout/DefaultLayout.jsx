import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DefaultLayout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex flex-col">
      <Header setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
      <div className="flex flex-row">
        <Sidebar showSidebar={showSidebar} />
        <div className="w-[83%] flex flex-col justify-start pl-6 pt-6 pb-20 pr-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
