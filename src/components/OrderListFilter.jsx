import React, { useState } from "react";

const OrderListFilter = () => {
  const [filters, setFilters] = useState([
    { title: "Completed", value: "completed", selected: false },
    { title: "Processing", value: "onhold", selected: false },
    { title: "Rejected", value: "processing", selected: false },
    { title: "On Hold", value: "rejected", selected: false },
    { title: "In Transit", value: "intransit", selected: false },
  ]);

  const toggleFilter = (filterName) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.value === filterName
          ? { ...filter, selected: !filter.selected }
          : filter
      )
    );
  };

  const applyFilter = () => {
    console.log(filters);
  };

  return (
    <div className="mt-10 flex flex-row items-center justify-center gap-20 ">
      <div className="bg-white  py-4 rounded-3xl shadow-lg">
        <div className="border-b pb-5 px-6 ">
          <h2 className="text-lg font-bold">Select Order Type</h2>
          <div className="grid grid-cols-3 gap-5  mt-6">
            <p className="border rounded-full text-sm font-bold px-[10px] text-center py-2 cursor-pointer border-gray-400">
              Health & Medicine
            </p>
            <p className="border rounded-full text-sm font-bold px-[10px] text-center py-2 cursor-pointer border-gray-400">
              Book & Stationary
            </p>
            <p className="border rounded-full text-sm font-bold px-[10px] text-center py-2 cursor-pointer border-gray-400">
              Home & Living
            </p>
            <p className="border rounded-full text-sm font-bold px-[10px] text-center py-2 cursor-pointer border-gray-400">
              Fashion & Beauty
            </p>
            <p className="border rounded-full text-sm font-bold px-[10px] text-center py-2 cursor-pointer border-gray-400">
              Electronics
            </p>
            <p className="border rounded-full text-sm font-bold px-[10px] text-center py-2 cursor-pointer border-gray-400">
              Mobile & Phone
            </p>
            <p className="border rounded-full text-sm font-bold px-[10px] text-center py-2 cursor-pointer border-gray-400">
              Accessories
            </p>
          </div>
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

      <div className="bg-white   py-4 rounded-3xl shadow-lg">
        <div className="border-b pb-5 px-6 ">
          <h2 className="text-lg font-bold">Select Order Status</h2>
          <div className="grid grid-cols-3 gap-5  mt-6">
            {filters.map((filter) => {
              return (
                <p
                  onClick={() => {
                    toggleFilter(filter.value);
                  }}
                  className={` ${
                    filter.selected
                      ? "bg-[#4880FF] text-white border-transparent"
                      : "bg-white  border-gray-500"
                  }  border rounded-full text-sm font-semibold px-8 text-center py-2 cursor-pointer `}
                >
                  {filter.title}
                </p>
              );
            })}
          </div>
        </div>
        <div className="py-5  px-6 flex flex-col">
          <p className="text-sm text-gray-500">
            <sup>*</sup>You can choose multiple Order type
          </p>
          <button
            onClick={applyFilter}
            className="mt-4 mx-auto bg-[#4880FF] text-white text-xs font-semibold rounded-md px-6 py-2 hover:bg-[#f5f6fa] hover:text-[#4880FF] border border-transparent hover:border-[#4880FF] "
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderListFilter;
