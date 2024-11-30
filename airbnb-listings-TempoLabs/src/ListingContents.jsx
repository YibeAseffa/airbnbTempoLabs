import React from "react";
import AvatarImage from "../src/assets/avatar.png";
import bedroom from "../src/assets/bedroom.png";
import Calendar from "react-calendar";
import {
    StarIcon,
    HomeIcon,
    CalendarIcon,
    KeyboardIcon,
    
} from "@radix-ui/react-icons"; // Example: Add the relevant Radix UI Icons

const ListingContents = () => {
  const startDate = new Date(2022, 1, 4); // February 4, 2022
  const endDate = new Date(2022, 1, 10); // February 10, 2022

  return (
    <div className="flex items-start gap-20 w-full ">
      {/* Left Section */}
      <div className="flex flex-col items-start gap-8 flex-1">
        {/* Header Section */}
        <div className="flex items-center gap-6 w-full">
          <div className="flex-1">
            <h2 className="text-xl font-semibold">
              Entire rental unit hosted by Ghazal
            </h2>
            <p className="text-sm text-gray-600">
              2 guests · 1 bedroom · 1 bed · 1 bath
            </p>
          </div>
          <img
            src={AvatarImage}
            alt="Host Profile"
            className="w-14 h-14 rounded-full object-cover"
                  />
                  
        </div>
   <hr className="border-0 border-t border-gray-300  w-full" />
        {/* Details Section */}
              <div className="flex flex-col gap-4">
                  
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <HomeIcon className="text-xl text-gray-700" />
              <div>
                <h4 className="font-semibold">Entire home</h4>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  You’ll have the apartment to yourself
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <HomeIcon className="text-xl text-gray-700" />
              <div>
                <h4 className="font-semibold">Enhanced Clean</h4>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  This Host committed to Airbnb’s 5-step enhanced cleaning
                  process. <a href="#" className="text-black text-sm font-medium leading-5 underline">Show more</a>
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <HomeIcon className="text-xl text-gray-700" />
              <div>
                <h4 className="font-semibold">Self check-in</h4>
                <p className="text-gray-500 text-sm font-normal leading-5">
                  Check yourself in with the keypad.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CalendarIcon className="text-xl text-gray-700" />
              <h4 className="font-semibold">Free cancellation before Feb 14</h4>
            </li>
          </ul>
        </div>


 <hr className="border-0 border-t border-gray-300  w-full" />
        {/* Description */}
        <p className="text-black text-base font-normal leading-6 w-[670px]">
          Come and stay in this superb duplex T2, in the heart of the historic
          center of Bordeaux. Spacious and bright, in a real Bordeaux building
          in exposed stone, you will enjoy all the charms of the city thanks to
          its ideal location. Close to many shops, bars, and restaurants, you
          can access the apartment by tram A and C and bus routes 27 and 44.... <br/>
          <a href="#" className="text-black text-sm font-medium leading-5 underline"> Show more {'>'}</a>
        </p>

       <hr className="border-0 border-t border-gray-300  w-full" />

        {/* Where You'll Sleep Section */}
        <div>
          <h2 className="text-xl font-semibold">Where you'll sleep</h2>
          <div className="flex flex-col items-start gap-4 mt-4">
            <img
              src={bedroom}
              alt="Bedroom"
              className="w-80 h-52 rounded-lg object-cover"
            />
            <div>
              <h4 className="text-base font-medium">Bedroom</h4>
              <p className="text-sm text-gray-600">1 queen bed</p>
            </div>
          </div>
        </div>

       <hr className="border-0 border-t border-gray-300  w-full" />

        {/* What this place offers */}
        <div className="flex flex-col items-start gap-8 w-full">

          <h2 className="text-xl font-semibold">What this place offers</h2>
                  <div className="grid grid-cols-2 gap-4 mb-5 w-full ">
                     

            <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" /> Garden view
            </div>
            <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" /> Wifi
            </div>
            <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" />
              Free washer - in building
            </div>
            <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" />
              Central air conditioning
            </div>
            <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" /> Refrigerator
            </div>
            <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" /> Kitchen
            </div>
             <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" /> Dryer
                      </div>
                       <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" /> Security cameras on property
                      </div>
                       <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" /> Bicycles
                      </div>
                       <div className="flex items-center gap-2">
              <HomeIcon className="text-xl text-gray-700" /> Pets allowed
            </div>
          </div>
          <button className="flex p-2 justify-center items-center gap-2 rounded-md border border-black bg-white shadow-sm"
>
            Show all 37 amenities
          </button>
        </div>

    <hr className="border-0 border-t border-gray-300  w-full" />

        {/* Calendar Section */}
              <div className="flex flex-col items-start gap-8 self-stretch">
                  <div className="flex flex-col items-start self-stretch"
>
          <h2 className="text-black text-2xl font-medium leading-8">7 nights in New York</h2>
         <p className="self-stretch text-gray-500 text-sm font-normal leading-5">Feb 19, 2022 - Feb 26, 2022</p>
                      </div>
          <div className="flex items-start gap-6 self-stretch">
            <Calendar value={[startDate, endDate]} className="border rounded-lg" />
            <Calendar value={[startDate, endDate]} className="border rounded-lg" />
          </div>
              </div>
              <div className="flex justify-between items-center self-stretch">
  <KeyboardIcon className="w-6 h-6" />
  <p className="text-black font-medium text-sm leading-5 underline underline-offset-2 decoration-solid">Clear dates</p>
</div>
      </div>

     {/* Pricing Card Section */}
<div className="flex flex-col w-[350px] p-5 bg-white border border-gray-300 rounded-lg shadow-md">
  {/* Pricing Header */}
  <div className="flex justify-between items-center w-full mb-2">
    <h2 className="text-2xl font-bold text-gray-800">
      $75 <span className="text-lg text-gray-500">/ night</span>
    </h2>
    <div className="flex items-center text-black text-sm font-medium leading-5 ">
      <StarIcon className="text-red-500 mr-1" />
      <span>5.0</span>
      <a href="#" className="ml-1 underline" >· 7 reviews</a>
    </div>
  </div>

  {/* Reservation Form */}
  <form className="flex flex-col w-full  p-5 bg-white mt-4">
    <div className="grid grid-cols-2 gap-2 ">
      <div className="flex flex-col  border border-gray-300 rounded-lg">
        <label className="text-xs font-semibold text-black leading-4">CHECK-IN</label>
        <input
          type="date"
          defaultValue="2022-02-19"
          className="p-2 "
        />
      </div>
         <div className="flex flex-col  border border-gray-300 rounded-lg">
        <label className="text-xs font-semibold text-black leading-4">CHECKOUT</label>
        <input
          type="date"
          defaultValue="2022-02-26"
          className="p-2 "
        />
      </div>
    </div>
    <div className="flex flex-col mt-2  border border-gray-300 rounded-lg">
      <label className="text-xs font-semibold text-black leading-4">GUESTS</label>
      <select className="p-2">
        <option>2 guests</option>
      </select>
    </div>
    <button
      type="submit"
      className="w-full mt-4 mb-4 py-3 text-lg font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
    >
      Reserve
    </button>
    <p className="text-sm text-center text-gray-500">
      You won’t be charged yet
    </p>
  </form>

  {/* Pricing Breakdown */}
  <div className="border-t border-gray-300 mt-4 pt-2">
    <p className="flex justify-between text-sm text-gray-700">
      $79 × 7 nights <span>$555</span>
    </p>
    <p className="flex justify-between text-sm text-gray-700">
      Weekly discount <span className="text-green-500">-$28</span>
    </p>
    <p className="flex justify-between text-sm text-gray-700">
      Cleaning fee <span>$62</span>
    </p>
    <p className="flex justify-between text-sm text-gray-700">
      Service fee <span>$83</span>
    </p>
    <p className="flex justify-between text-sm text-gray-700">
      Occupancy taxes and fees <span>$29</span>
    </p>
    <p className="flex justify-between font-bold text-gray-900 mt-2">
      Total <span>$701</span>
    </p>
  </div>

  {/* Footer Link */}
  <p className="text-center mt-4">
    <a
      href="#"
      className="text-sm text-gray-500 underline hover:text-gray-600"
    >
      <StarIcon className="inline mr-1" />
      Report this listing
    </a>
  </p>
</div>

    </div>
  );
};

export default ListingContents;
