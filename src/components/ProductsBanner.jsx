import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const ProductsBanner = () => {
  return (
    <>
      <div className="bg-white relative">
        <Swiper
          navigation={{
            nextEl: ".custom-banner-next",
            prevEl: ".custom-banner-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
          loop={true}
        >
          {Array.from({ length: 3 }, (_, index) => {
            return (
              <SwiperSlide key={index}>
                <section className="bg-[#4880FF] text-white py-10 px-24 rounded-lg">
                  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                      <p className="text-sm mb-3 font-semibold text-slate-100">
                        September 12-22
                      </p>
                      <h2 className="text-4xl font-bold leading-tight">
                        Enjoy free home <br />
                        delivery in this summer
                      </h2>
                      <p className="text-sm mt-4 mb-8 font-semibold text-slate-100">
                        Designer Dresses - Pick from trendy Designer Dress.
                      </p>
                      <button className="text-white bg-orange-500 transform hover:translate-x-2 duration-150 font-bold py-2 px-5 rounded-lg">
                        Get Started
                      </button>
                    </div>
                  </div>
                </section>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-banner-prev absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10">
          <i className="fa-solid fa-chevron-left w-10 h-10 text-2xl text-gray-800 bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center "></i>
        </div>
        <div className="custom-banner-next absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10">
          <i className="fa-solid fa-chevron-right w-10 h-10 text-2xl text-gray-800 bg-[rgba(255,255,255,0.5)] rounded-full flex items-center justify-center "></i>
        </div>
      </div>
    </>
  );
};

export default ProductsBanner;
