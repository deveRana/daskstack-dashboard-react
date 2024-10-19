import React from "react";
import { dashboardArr1 } from "../data/data";

const Dashboard = () => {
  return (
    <div className="mt-32" >
      <h2 className="text-3xl font-bold">Dashboard</h2>

      <div className="mt-6 grid grid-cols-4 ">
        {dashboardArr1.map((ele) => {
          return (
            <>
              <div className=" mr-6 relative  flex flex-col items-start justify-between bg-white py-3 px-4 rounded-lg shadow-lg">
                <div
                  style={{ background: ele.bgColor }}
                  className={`absolute top-5 right-5  rounded-2xl `}
                >
                  <i
                    style={{ color: ele.textColor }}
                    class={`fa-solid ${ele.icon}  w-12 h-12 text-2xl flex items-center justify-center`}
                  ></i>
                </div>
                <h4 className="text-gray-600 font-semibold text-lg">
                  {ele.title}
                </h4>
                <span className="font-bold text-3xl mt-4">{ele.value}</span>

                <p className="text-[16px] mt-8 text-gray-600 font-semibold">
                  {ele.riseStatus ? (
                    <i class="fa-solid fa-arrow-trend-up text-[#00B69B] mr-3"></i>
                  ) : (
                    <i class="fa-solid fa-arrow-trend-down text-[#F93C65] mr-3"></i>
                  )}
                  <span
                    className={
                      ele.riseStatus ? "text-[#00B69B]" : "text-[#F93C65]"
                    }
                  >
                    {ele.percentage}
                  </span>{" "}
                  {ele.marketDesc}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
