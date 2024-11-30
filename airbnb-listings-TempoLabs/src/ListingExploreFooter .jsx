import React from "react";

const ListingExploreFooter = () => {
  return (
    <div className="px-8 py-8 md:px-20 md:py-16 flex flex-col gap-12 w-full bg-gray-50">
      {/* Explore Other Options */}
      <h2 className="text-2xl font-medium leading-8 text-black w-full">
        Explore other options in France
      </h2>
      <div className="flex flex-wrap gap-6 w-full">
        <div className="flex flex-col items-start gap-4 w-[262px] h-[92px] flex-none order-0 flex-grow">
          <span className="text-sm text-gray-600 hover:underline">Paris</span>
          <span className="text-sm text-gray-600 hover:underline">Lille</span>
          <span className="text-sm text-gray-600 hover:underline">Toulouse</span>
        </div>
        <div className="flex flex-col items-start gap-4 w-[262px] h-[92px] flex-none order-0 flex-grow">
          <span className="text-sm text-gray-600 hover:underline">Nice</span>
          <span className="text-sm text-gray-600 hover:underline">
            Aix-en-Provence
          </span>
          <span className="text-sm text-gray-600 hover:underline">
            Montpellier
          </span>
        </div>
        <div className="flex flex-col items-start gap-4 w-[262px] h-[92px] flex-none order-0 flex-grow">
          <span className="text-sm text-gray-600 hover:underline">Lyon</span>
          <span className="text-sm text-gray-600 hover:underline">Rouen</span>
          <span className="text-sm text-gray-600 hover:underline">Dijon</span>
        </div>
        <div className="flex flex-col items-start gap-4 w-[262px] h-[92px] flex-none order-0 flex-grow">
          <span className="text-sm text-gray-600 hover:underline">Marseille</span>
          <span className="text-sm text-gray-600 hover:underline">Amiens</span>
          <span className="text-sm text-gray-600 hover:underline">Grenoble</span>
        </div>
      </div>

      {/* Unique Stays */}
      <h3 className="text-base font-medium leading-6 text-black w-full">
        Unique stays on Airbnb
      </h3>
      <div className="flex flex-wrap gap-6 w-full">
        <div className="flex flex-col items-start gap-4 w-[262px] h-[56px] flex-none order-0 flex-grow">
          <span className="text-sm text-gray-600 hover:underline">
            Beach House Rentals
          </span>
          <span className="text-sm text-gray-600 hover:underline">
            Cabin Rentals
          </span>
        </div>
        <div className="flex flex-col items-start gap-4 w-[262px] h-[56px] flex-none order-0 flex-grow">
          <span className="text-sm text-gray-600 hover:underline">
            Camper Rentals
          </span>
          <span className="text-sm text-gray-600 hover:underline">
            Tiny House Rentals
          </span>
        </div>
        <div className="flex flex-col items-start gap-4 w-[262px] h-[56px] flex-none order-0 flex-grow">
          <span className="text-sm text-gray-600 hover:underline">
            Glamping Rentals
          </span>
          <span className="text-sm text-gray-600 hover:underline">
            Lakehouse Rentals
          </span>
        </div>
        <div className="flex flex-col items-start gap-4 w-[262px] h-[56px] flex-none order-0 flex-grow">
          <span className="text-sm text-gray-600 hover:underline">
            Treehouse Rentals
          </span>
          <span className="text-sm text-gray-600 hover:underline">
            Mountain Chalet Rentals
          </span>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap gap-2 text-sm text-black">
        <span className="hover:underline">Airbnb</span>
        <span className="text-gray-600">›</span>
        <span className="hover:underline">Europe</span>
        <span className="text-gray-600">›</span>
        <span className="hover:underline">France</span>
        <span className="text-gray-600">›</span>
        <span className="hover:underline">Bordeaux</span>
      </div>
    </div>
  );
};

export default ListingExploreFooter;
