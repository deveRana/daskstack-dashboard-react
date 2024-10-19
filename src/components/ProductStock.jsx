import React from "react";
import { productStockList } from "../data/data";

const ProductStock = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-3xl font-bold">Product Stock</h2>
        <div className=" relative mx-12">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="fa-solid fa-magnifying-glass text-gray-400"></i>
          </span>
          <input
            className="w-full py-2 px-10 rounded-3xl border outline-none bg-white"
            type="text"
            placeholder="Search product name"
          />
        </div>
      </div>

      <div className="mt-10 relative flex flex-col w-full  no-scrollbar overflow-hidden text-gray-700 bg-white  rounded-lg bg-clip-border border">
        <table className="w-full text-left table-auto min-w-max ">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="text-sm font-extrabold uppercase leading-1">
                  Image
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="text-sm font-extrabold uppercase leading-1">
                  Product Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="text-sm font-extrabold uppercase leading-1">
                  Category
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="text-sm font-extrabold uppercase leading-1">
                  Price
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="text-sm font-extrabold uppercase leading-1">
                  Piece
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="text-sm font-extrabold uppercase leading-1">
                  Available Color
                </p>
              </th>
              <th className="p-4 border-b border-slate-300 bg-slate-50">
                <p className="text-sm font-extrabold uppercase leading-1">
                  Action
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {productStockList.map((ele, index) => {
              return (
                <tr className="hover:bg-slate-50" key={index}>
                  <td className="px-4 py-6 border-b border-slate-200">
                    <img
                      src={ele.product_image}
                      className="w-14 h-14 rounded-lg"
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-6 border-b border-slate-200">
                    <p className="text-sm font-semibold">{ele.product_name}</p>
                  </td>
                  <td className=" px-4 py-6 border-b border-slate-200">
                    <p className="text-sm font-semibold">{ele.category}</p>
                  </td>
                  <td className="px-4 py-6 border-b border-slate-200">
                    <p className="text-sm font-semibold">{ele.price}$</p>
                  </td>
                  <td className="px-4 py-6 border-b border-slate-200">
                    <p className="text-sm font-semibold">{ele.pieces}</p>
                  </td>
                  <td className="px-4 py-6 border-b border-slate-200 ">
                    <div className="flex flex-row justify-start gap-3 items-start">
                      {ele.color.map((clor) => {
                        return (
                          <span
                            className="block w-5 h-5 rounded-full"
                            style={{ background: clor }}
                          ></span>
                        );
                      })}
                    </div>
                  </td>
                  <td className="px-4 py-6 border-b border-slate-200">
                    <div className="flex flex-row">
                      <button>
                        <i class="fa-solid fa-pen-to-square bg-white px-4 py-1 rounded-tl-md rounded-bl-md border cursor-pointer "></i>
                      </button>
                      <button>
                        <i class="fa-solid fa-trash text-[#EF3826] bg-white px-4 py-1 rounded-tr-md rounded-br-md border cursor-pointer "></i>
                      </button>
                    </div>
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
  );
};

export default ProductStock;
