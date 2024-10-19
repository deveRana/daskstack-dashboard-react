import React from "react";

const PricingCard = ({ plan }) => {
  return (
    <div className=" rounded-3xl overflow-hidden shadow-lg bg-white mt-10 py-5 px-6 ">
      <div className=" py-4">
        <div className="font-bold text-2xl mb-2 text-center">{plan.name}</div>
        <p className="text-gray-400 text-base text-center">Monthly Charge</p>
      </div>
      <div className=" py-2 border-b border-gray-400 pb-7">
        <p className="text-5xl font-bold text-center text-[#4880FF]">
          {plan.price}
        </p>
      </div>
      <div className="px-5 pt-7">
        <ul className=" list-inside list-none">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className={`${
                feature.status ? "text-gray-700" : "text-gray-400"
              } text-lg font-semibold text-center pb-5`}
            >
              {feature.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-6 flex flex-col items-center border-t py-7">
        <button className="mx-auto border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent font-bold py-2 px-6 rounded-full">
          Get Started
        </button>
        <p className="font-bold text-base underline mt-4">
          Start Your 30 Day Free Trial
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
