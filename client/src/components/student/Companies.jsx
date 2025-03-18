import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg/8 font-semibold text-gray-900">
            Trusted by learners from
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-10  w-full object-contain lg:col-span-1"
              src={assets.microsoft_logo}
              alt="microsoft"
            />
            <img
              className="col-span-2 max-h-10  w-full object-contain lg:col-span-1"
              src={assets.paypal_logo}
              alt="pappal"
            />
            <img
              className="col-span-2 max-h-10  w-full object-contain lg:col-span-1"
              src={assets.adobe_logo}
              alt="adobe"
            />
            <img
              className="col-span-2 max-h-10  w-full object-contain lg:col-span-1"
              src={assets.walmart_logo}
              alt="walmart"
            />
            <img
              className="col-span-2 max-h-10  w-full object-contain lg:col-span-1"
              src={assets.accenture_logo}
              alt="accenture"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
