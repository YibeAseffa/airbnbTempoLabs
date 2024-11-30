import React from "react";
import { MagnifyingGlassIcon, GlobeIcon, HamburgerMenuIcon, PersonIcon } from "@radix-ui/react-icons";

const AirbnbListingNavBar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-sm">
      {/* Left Section: Logo */}
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
          alt="Airbnb Logo"
          className="h-8 cursor-pointer"
        />
      </div>

      {/* Center Section: Search Bar */}
      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 max-w-lg w-full">
        <input
          type="text"
          placeholder="Start your search"
          className="flex-1 bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none px-2"
        />
        <button className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="text-sm cursor-pointer">Become a Host</span>
        <GlobeIcon className="w-5 h-5 cursor-pointer" />
        <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
          <HamburgerMenuIcon className="w-5 h-5 text-gray-600 cursor-pointer" />
          <PersonIcon className="w-6 h-6 text-gray-600 rounded-full cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default AirbnbListingNavBar;
