import React from "react";
import { orderList } from "../data/data";

const OrderList = () => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold">Order Lists</h2>

        <div className="my-6 flex flex-row items-center  bg-white w-fit border rounded-md text-sm font-bold">
          <i class="fa-solid fa-filter  px-5 text-2xl"></i>
          <span className=" border-l px-5 py-6 ">Filter By</span>
          <button className=" border-l px-5 py-6 ">
            Date <i class="fa-solid fa-chevron-down ml-3 "></i>
          </button>
          <button className=" border-l px-5 py-6 ">
            Order Type <i class="fa-solid fa-chevron-down ml-3"></i>
          </button>
          <button className=" border-l px-5 py-6 ">
            Order Status <i class="fa-solid fa-chevron-down ml-3"></i>
          </button>

          <button className="text-[#EF3826] border-l px-5 py-6">
            <i class="fa-solid fa-arrow-rotate-left mr-3"></i> Reset Filter
          </button>
        </div>

        <div className=" relative flex flex-col w-full  no-scrollbar overflow-hidden text-gray-700 bg-white  rounded-lg bg-clip-border border">
          <table className="w-full text-left table-auto min-w-max ">
            <thead>
              <tr>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="text-sm font-extrabold uppercase leading-1">
                    Id
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="text-sm font-extrabold uppercase leading-1">
                    Name
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="text-sm font-extrabold uppercase leading-1">
                    Address
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="text-sm font-extrabold uppercase leading-1">
                    Date
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="text-sm font-extrabold uppercase leading-1">
                    Type
                  </p>
                </th>
                <th className="p-4 border-b border-slate-300 bg-slate-50">
                  <p className="text-sm font-extrabold uppercase leading-1">
                    Status
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((ele, index) => {
                return (
                  <tr className="hover:bg-slate-50" key={index}>
                    <td className="px-4 py-6 border-b border-slate-200">
                      <p className="text-sm font-semibold">{ele.id}</p>
                    </td>
                    <td className="px-4 py-6 border-b border-slate-200">
                      <p className="text-sm font-semibold">{ele.name}</p>
                    </td>
                    <td className=" px-4 py-6 border-b border-slate-200">
                      <p className="text-sm font-semibold">{ele.address}</p>
                    </td>
                    <td className="px-4 py-6 border-b border-slate-200">
                      <p className="text-sm font-semibold">{ele.date}</p>
                    </td>
                    <td className="px-4 py-6 border-b border-slate-200">
                      <p className="text-sm font-semibold">{ele.type}</p>
                    </td>
                    <td className="px-4 py-6 border-b border-slate-200">
                      <button
                        className={`w-20 py-1 rounded-md text-xs  font-bold capitalize ${
                          ele.status == "processing"
                            ? "text-[#6226EF] bg-[rgba(98,38,239,.2)]"
                            : ele.status == "rejected"
                            ? "text-[#EF3826] bg-[rgba(239,56,38,.2)]"
                            : ele.status == "intransit"
                            ? "text-[#BA29FF] bg-[rgba(186,41,255,.2)]"
                            : ele.status == "onhold"
                            ? "text-[#FFA756] bg-[rgba(255,167,86,.2)] "
                            : "text-[#00B69B] bg-[rgba(0,182,155,.2)] "
                        } `}
                      >
                        {ele.status == "processing"
                          ? "Processing"
                          : ele.status == "rejected"
                          ? "Rejceted"
                          : ele.status == "intransit"
                          ? "In Transit"
                          : ele.status == "onhold"
                          ? "On Hold"
                          : "Completed"}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-row items-center justify-between mt-5">
          <p className="font-semibold text-sm text-gray-400">
            Showing 1-09 of 78
          </p>
          <div className="flex flex-row">
            <button>
              <i class="fa-solid fa-chevron-left bg-white px-4 py-2 rounded-tl-md rounded-bl-md border cursor-pointer "></i>
            </button>
            <button>
              <i class="fa-solid fa-chevron-right bg-white px-4 py-2 rounded-tr-md rounded-br-md border cursor-pointer "></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
