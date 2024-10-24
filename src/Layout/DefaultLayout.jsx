import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-[83%] flex flex-col justify-start pl-6 pt-6 pb-20 pr-6">
          {children}
          {/* <AllContactSPage />
          <AllTeamPage />
          <AccountTab />
          <NotificationTab />
          <AddContactForm />
          <TeamMemberForm />
          <Settings />
           */}
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
