import React from "react";
import {
  MagnifyingGlassIcon,
  GlobeIcon,
  PersonIcon,
  HamburgerMenuIcon,
  
  ChevronDownIcon,
} from "@radix-ui/react-icons";

const NavBarStandardSearch = () => {
  const filters = [
    "Price",
    "Type of place",
    "Free cancellation",
    "Wifi",
    "Kitchen",
    "Air conditioning",
    "Washer",
    "Iron",
    "Dedicated workspace",
    "Free parking",
    "Dryer",
  ];

  return (
    <div className="flex flex-col items-start px-6 py-4 md:px-8 md:py-6 gap-6 w-full max-w-[1440px] h-[148px] bg-white shadow-inner shadow-gray-200">
      {/* Navbar */}
      <nav className="flex flex-row items-center gap-6 w-full max-w-[1392px] h-12">
        {/* Left Section: Logo */}
        <div className="flex-1">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
            alt="Airbnb Logo"
            className="h-8 md:h-10 cursor-pointer"
          />
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-2 flex justify-center">
          <div className="flex items-center gap-4 p-2 md:p-3 border border-gray-300 rounded-full shadow-md w-full max-w-md lg:max-w-2xl">
            <div className="px-2 text-sm md:text-base font-medium text-gray-800">
              Bordeaux
            </div>
            <div className="w-px h-5 bg-gray-300"></div>
            <div className="px-2 text-sm md:text-base font-medium text-gray-800">
              Feb 19–26
            </div>
            <div className="w-px h-5 bg-gray-300"></div>
            <div className="px-2 text-sm md:text-base font-medium text-gray-800">
              2 guests
            </div>
            <button className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center text-white">
              <MagnifyingGlassIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-4">
          <span className="text-sm md:text-base font-medium text-gray-800 cursor-pointer hover:underline">
            Become a Host
          </span>
          <GlobeIcon className="w-5 h-5 md:w-6 md:h-6 text-gray-800 cursor-pointer" />
          <div className="flex items-center gap-2 px-2 py-1 border border-gray-300 rounded-full">
            <HamburgerMenuIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
            <PersonIcon className="w-6 h-6 md:w-7 md:h-7 text-gray-800" />
          </div>
        </div>
      </nav>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-[1392px] h-auto md:h-9">
    <div className="flex flex-col md:flex-row items-start gap-4 w-full md:w-[252px] h-auto md:h-9 flex-none relative">
  <div className="relative w-full">
    <select className="block appearance-none w-full bg-gray-100 border border-gray-300 rounded-full px-4 pr-10 py-2 text-sm md:text-base text-gray-800 cursor-pointer">
      <option>Price</option>
    </select>
    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
  </div>

  <div className="relative w-full">
    <select className="block appearance-none w-full bg-gray-100 border border-gray-300 rounded-full px-4 pr-10 py-2 text-sm md:text-base text-gray-800 cursor-pointer">
      <option>Type of place</option>
    </select>
    <ChevronDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
  </div>
</div>

              
              <div className="flex flex-row items-start gap-2 w-[1094px] h-9 flex-none order-2">
 
        {filters.map((filter, index) => (
          <button
            key={index}
             className="border border-gray-300 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm">
                <p className="flex items-center text-xs md:text-sm font-normal text-gray-700">{filter}</p>
          </button>
        ))}
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-sm md:text-base font-medium text-gray-800 hover:bg-gray-200">
<svg className="w-4 h-4 text-gray-800" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.95837 6.66675H6.04171" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.625 6.66675H16.0417" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.95837 13.3333H10.2084" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.7916 13.3333H16.0416" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2084 6.66675C10.2084 7.70228 9.36891 8.54175 8.33337 8.54175C7.29784 8.54175 6.45837 7.70228 6.45837 6.66675C6.45837 5.63121 7.29784 4.79175 8.33337 4.79175C9.36891 4.79175 10.2084 5.63121 10.2084 6.66675Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.375 13.3333C14.375 14.3688 13.5355 15.2083 12.5 15.2083C11.4645 15.2083 10.625 14.3688 10.625 13.3333C10.625 12.2977 11.4645 11.4583 12.5 11.4583C13.5355 11.4583 14.375 12.2977 14.375 13.3333Z" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          Filters 
        </button>
      </div>
          </div>
          </div>
  );
};

export default NavBarStandardSearch;
