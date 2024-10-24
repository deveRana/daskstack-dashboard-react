import React from "react";
import img from "../assets/products/watch-1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
const Favourites = () => {
  return (
    <div className="grid grid-cols-3 gap-y-8">
      {Array.from({ length: 9 }, (_, index) => (
        <div
          key={index}
          className="max-w-xs w-full bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="relative">
            <Swiper
              navigation={{
                nextEl: `.custom-product-next-${index}`,
                prevEl: `.custom-product-prev-${index}`,
              }}
              modules={[Navigation]}
              className="mySwiper"
              loop={true}
            >
              <SwiperSlide>
                <img
                  className="w-full h-72 object-cover"
                  src={img}
                  alt="Nature scene"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-72 object-cover"
                  src={img}
                  alt="Nature scene"
                />
              </SwiperSlide>
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div
              className={`custom-product-prev-${index} absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10`}
            >
              <i className="fa-solid fa-chevron-left w-10 h-10 text-2xl text-gray-800 bg-[rgba(226,234,248,0.4)]  rounded-full flex items-center justify-center "></i>
            </div>
            <div
              className={`custom-product-next-${index} absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10`}
            >
              <i className="fa-solid fa-chevron-right w-10 h-10 text-2xl text-gray-800 bg-[rgba(226,234,248,0.4)]  rounded-full flex items-center justify-center "></i>
            </div>
          </div>
          <div className="p-6 relative">
            <button className="absolute top-8 right-5 text-gray-800 text-2xl">
              <i className="fa-solid fa-heart text-red-500"></i>
            </button>
            <h2 className="text-lg font-bold text-gray-800">
              Apple Watch Series {index + 1}
            </h2>
            <p className="text-[#4880FF] text-sm font-bold mt-1 mb-2">$120</p>
            <div className="flex items-center mb-4">
              <i className="fa-solid fa-star text-[#FF9500]"></i>
              <span className="text-gray-600 ml-1 text-sm">
                4.9 (128 reviews)
              </span>
            </div>
            <div className="flex justify-between items-center">
              <button className="text-sm font-bold text-gray-800 bg-[#E2EAF8] py-2 px-5 rounded-md hover:bg-[#4880FF] hover:text-white duration-300">
                Edit Product
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Favourites;
