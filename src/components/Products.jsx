import React from "react";
import img from "../assets/products/watch-1.svg";
const Products = () => {
  return (
    <div className="mt-10 grid grid-cols-4 space-x-8">
      {Array.from({ length: 3 }, (_, index) => {
        return (
          <div key={index} className="flex justify-center items-center ">
            <div className="max-w-xs w-full bg-white rounded-xl shadow-lg overflow-hidden ">
              <div>
                <img
                  className="w-full h-72 object-cover"
                  src={img}
                  alt="Nature scene"
                />
              </div>
              <div className="p-6 relative">
                <button className="absolute top-8 right-5  text-gray-800 text-2xl">
                  <i class="fa-regular fa-heart"></i>
                </button>
                <h2 className="text-lg font-bold  text-gray-800">
                  Apple Watch Series 4
                </h2>
                <p className="text-[#4880FF] text-sm font-bold mt-1 mb-2">
                  $120
                </p>
                <div className="flex items-center mb-4">
                  <i class="fa-solid fa-star text-[#FF9500]"></i>
                  <span className="text-gray-600 ml-1 text-sm">
                    4.9 (128 reviews)
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-sm font-bold text-gray-800 bg-[#E2EAF8] py-2 px-5 rounded-md hover:bg-[#4880FF] hover:text-white duration-300 ">
                    Edit Product
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
