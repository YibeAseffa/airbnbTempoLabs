import React from "react";
import { HeartIcon, StarIcon } from "@radix-ui/react-icons"; // Import Radix Icons
import map from "../src/assets/map.PNG";
import list1image from "../src/assets/list1.PNG";
import list2image from "../src/assets/list2.PNG";
import list3image from "../src/assets/list3.PNG";

const SearchListings = () => {
  const listings = [
    {
      id: 1,
      title: "Bordeaux Getaway",
      description:
        "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      price: "$325 / night",
      rating: "5.0",
      reviews: "318",
      image: list1image,
    },
    {
      id: 2,
      title: "Charming Waterfront Condo",
      description:
        "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      price: "$200 / night",
      rating: "5.0",
      reviews: "318",
      image: list2image,
    },
    {
      id: 3,
      title: "Historic City Center Home",
      description:
        "4-6 guests · Entire Home · 5 beds · 3 bath · Wifi · Kitchen · Free Parking",
      price: "$250 / night",
      rating: "4.8",
      reviews: "198",
      image: list3image,
    },
  ];

  return (
    <div className="flex flex-row items-start p-6 space-y-6 w-full max-w-[1440px] h-auto bg-white flex-none order-1 grow-0">
      {/* Listings Section */}
      <div className="flex-1 space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">
          200+ stays in Bordeaux
        </h2>
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="flex flex-col md:flex-row gap-4 p-4 border border-gray-300 rounded-lg shadow-sm"
          >
            <img
              src={listing.image}
              alt={listing.title}
              className="w-full md:w-40 md:h-32 object-cover rounded-lg"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <p className="text-sm text-gray-500">
                  Entire home in Bordeaux
                </p>
                <HeartIcon className="w-5 h-5 text-red-400 hover:text-red-500 cursor-pointer" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">
                {listing.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                {listing.description}
              </p>
              <div className="flex justify-between items-center mt-4 text-gray-700">
                <span className="flex items-center gap-1 text-sm">
                  <StarIcon className="w-5 h-5 text-red-500" />
                  {listing.rating} ({listing.reviews} reviews)
                </span>
                <span className="text-lg font-semibold">{listing.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="w-full lg:w-[600px] h-[300px] md:h-[400px] lg:h-[652px] flex-shrink-0">
        <img
          src={map}
          alt="Map Placeholder"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default SearchListings;
