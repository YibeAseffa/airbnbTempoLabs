import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const AirbnbSearch = () => {
  return (
    <div className="flex justify-center items-center my-5 px-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-full shadow-md px-5 py-2 w-full max-w-4xl">
        {/* Location Field */}
        <div className="flex flex-col mb-4 md:mb-0 md:pr-5 md:border-r md:border-gray-300">
          <label className="text-xs font-bold text-gray-700 mb-1">Location</label>
          <input
            type="text"
            placeholder="Where are you going?"
            className="text-sm text-gray-600 focus:outline-none placeholder-gray-400 w-full md:w-40"
          />
        </div>

        {/* Check-in Field */}
        <div className="flex flex-col mb-4 md:mb-0 md:px-5 md:border-r md:border-gray-300">
          <label className="text-xs font-bold text-gray-700 mb-1">Check in</label>
          <input
            type="text"
            placeholder="Add dates"
            className="text-sm text-gray-600 focus:outline-none placeholder-gray-400 w-full md:w-40"
          />
        </div>

        {/* Check-out Field */}
        <div className="flex flex-col mb-4 md:mb-0 md:px-5 md:border-r md:border-gray-300">
          <label className="text-xs font-bold text-gray-700 mb-1">Check out</label>
          <input
            type="text"
            placeholder="Add dates"
            className="text-sm text-gray-600 focus:outline-none placeholder-gray-400 w-full md:w-40"
          />
        </div>

        {/* Guests Field */}
        <div className="flex flex-col mb-4 md:mb-0 md:px-5">
          <label className="text-xs font-bold text-gray-700 mb-1">Guests</label>
          <input
            type="text"
            placeholder="Add guests"
            className="text-sm text-gray-600 focus:outline-none placeholder-gray-400 w-full md:w-40"
          />
        </div>

        {/* Search Button */}
        <button className="ml-0 md:ml-4 bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-600 shadow-md">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AirbnbSearch;
