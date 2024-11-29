import React from "react";
import NashvilleImage from "../src/assets/inspiration-images/Nashville.png"; 
import SouthHavenImage from "../src/assets/inspiration-images/Bufallo.png"; 
import StantonImage from "../src/assets/inspiration-images/Stanton.png"; 
import NewBuffaloImage from "../src/assets/inspiration-images/Bufallo.png"; 
import GiftCardImage from "../src/assets/inspiration-images/giftcard.png"; 


const Inspirations = () => {
  const cityData = [
    { name: "Nashville", distance: "53 miles away", image: NashvilleImage },
    { name: "South Haven", distance: "168 miles away", image: SouthHavenImage },
    { name: "Stanton", distance: "192 miles away", image: StantonImage },
    { name: "New Buffalo", distance: "130 miles away", image: NewBuffaloImage },
  ];

  const tabs = [
    "Destinations for arts & culture",
    "Destinations for outdoor adventure",
    "Mountain cabins",
    "Beach destinations",
    "Popular destinations",
    "Unique Stays",
  ];

  const destinations = [
    { city: "Phoenix", region: "Arizona" },
    { city: "Hot Springs", region: "Arkansas" },
    { city: "Los Angeles", region: "California" },
    { city: "San Diego", region: "California" },
    { city: "San Francisco", region: "California" },
    { city: "Barcelona", region: "Catalonia" },
    { city: "Prague", region: "Czechia" },
    { city: "Washington", region: "District of Columbia" },
    { city: "Keswick", region: "England" },
    { city: "London", region: "England" },
    { city: "Scarborough", region: "England" },
  ];

  return (
    <div className="flex flex-col items-center gap-12 w-full px-6 md:px-16 py-16 bg-white">
      {/* Inspiration Section */}
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-medium text-black mb-8">
          Inspiration for your next trip
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cityData.map((city, index) => (
            <div
              key={index}
              className="flex flex-col items-start rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-40 object-cover"
              />
              <div className="flex flex-col items-start gap-2 p-[24px_16px_96px_16px] w-full bg-[#BC1A6E]">
                <h3 className="text-white text-4xl font-medium leading-[44px] w-full">{city.name}</h3>
                <p className="text-white text-lg font-normal leading-[28px] w-full">{city.distance}</p>
              </div>
            </div>
          ))}
        </div>
          </div>
          {/* Experiences Section */}
<div className="px-5 py-10 flex flex-col items-start gap-12 w-full">
  <p className="text-black text-[36px] font-medium leading-[44px] w-full">Discover Airbnb Experiences</p>
  <div className="flex items-start gap-6 w-full">
    {/* Experience 1 */}
    <div
      className="flex flex-col items-start gap-6 h-[628px] p-20 rounded-lg bg-[url('../src/assets/inspiration-images/discoverimage1.png')] bg-lightgray bg-cover bg-center flex-1"
    >
      <div className="w-full h-[112px]">
        <p className="text-white text-[48px] font-medium leading-[56px]">
          Things to do on your trip
        </p>
        <button className="mt-4 px-6 py-4 rounded-lg bg-white shadow-sm hover:bg-gray-100">
          Experiences
        </button>
      </div>
    </div>

    {/* Experience 2 */}
    <div
      className="flex flex-col items-start gap-6 h-[628px] p-20 rounded-lg bg-[url('../src/assets/inspiration-images/discoverimage2.png')] bg-lightgray bg-cover bg-center flex-1"
    >
      <div className="w-full h-[112px]">
        <p className="text-white text-[48px] font-medium leading-[56px]">
          Things to do on your trip
        </p>
        <button className="mt-4 px-6 py-4 rounded-lg bg-white shadow-sm hover:bg-gray-100">
          Experiences
        </button>
      </div>
    </div>
  </div>
</div>


      {/* Gift Card Section */}
      <div className="flex flex-col lg:flex-row items-center gap-6 w-full">
        <div className="flex-1">
          <p className="text-3xl font-medium text-black mb-4">
            Shop Airbnb gift cards
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-800">
            Learn more
          </button>
        </div>
        <img
          src={GiftCardImage}
          alt="Gift Card"
          className="w-full lg:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        />
          </div>
          {/* ask the super host section */}
<div
  className="flex flex-col justify-between items-start self-stretch h-[640px] p-20 rounded-lg mt-24"
  style={{
    background:
      "url('../src/assets/inspiration-images/ask-question-image.png') lightgray 0px -773.154px / 100% 300% no-repeat",
  }}
>
  <div className="w-[465px] h-[288px]">
    <p className="text-white font-medium text-[96px] leading-[96px]">
      Questions about hosting?
    </p>
    <button className="flex items-start justify-center gap-2 px-6 py-4 rounded-lg bg-white shadow-md hover:bg-gray-100">
      Ask a Superhost
    </button>
  </div>
</div>


      {/* Pre-Footer Section */}
      <div className="w-full">
        <h3 className="text-xl font-semibold text-black mb-4">
          Inspiration for future getaways
        </h3>
        <ul class="flex items-center gap-6 w-full bg-white shadow-[inset_0_-1px_0_0_#F3F4F6] ">   {tabs.map((tab, index) => (
            <li
              key={index}
              className={`text-black text-sm font-medium leading-5 ${
                index === 0
                  ? "text-black text-sm font-medium leading-5 underline"
                  : "text-gray-500 text-sm font-medium leading-5"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="flex items-start gap-6 self-stretch grid grid-cols-4 gap-y-6 gap-x-10">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="flex flex-col items-start flex-[1_0_0]"
            >
              <h4 className="text-lg font-semibold text-black">
                {destination.city}
              </h4>
              <p className="text-sm text-gray-600">{destination.region}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inspirations;
