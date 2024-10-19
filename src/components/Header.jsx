import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="flex flex-row bg-white">
        <div className="flex items-center justify-center w-[17%]">
          <div className="text-xl  font-extrabold ">
            <span className="text-[#4880FF]">Dash</span>Stack
          </div>
        </div>
        <div className="w-[83%] flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center w-[50%]">
            <button className="text-[#202224] ">
              <i class="fa-solid fa-bars text-2xl"></i>
            </button>
            <div className="w-full relative mx-12">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
              </span>
              <input
                className="w-full py-2 px-10 rounded-3xl border outline-none bg-[#f5f6fa]"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex items-center">
            <button class="relative mx-4">
              <div class="absolute right-0 top-0">
                <span class="text-xs text-white p-1 bg-[#F93C65] rounded-full">
                  12
                </span>
              </div>
              <div class="p-2">
                <i class="fa-solid fa-bell text-2xl text-[#4880FF] "></i>
              </div>
            </button>

            <div className="flex flex-row">
              <button className="relative z-10 block w-12 h-12 overflow-hidden rounded-full shadow focus:outline-none">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
                  alt="Your avatar"
                />
              </button>

              <div className="flex flex-col items-start justify-center ml-4 ">
                <h2 className="text-[#404040] font-bold text-sm">Moni Roy</h2>
                <p className="text-[#404040] font-semibold text-sm">Admin</p>
              </div>

              <div className="flex flex-col justify-center ml-4">
                <button>
                  <i class="fa-solid fa-chevron-down text-[#565656] border border-gray-400 p-1 rounded-full"></i>
                </button>
              </div>
              {/* <transition
                enter-active-class="transition duration-150 ease-out transform"
                enter-from-class="scale-95 opacity-0"
                enter-to-class="scale-100 opacity-100"
                leave-active-class="transition duration-150 ease-in transform"
                leave-from-class="scale-100 opacity-100"
                leave-to-class="scale-95 opacity-0"
              >
                <div
                  v-show="dropdownOpen"
                  className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                  >
                    Log out
                  </a>
                </div>
              </transition> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
