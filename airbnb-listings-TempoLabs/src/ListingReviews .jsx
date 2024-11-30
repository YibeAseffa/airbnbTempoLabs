import React from "react";
import AvatarImage from "../src/assets/avatar.png";
import { StarIcon } from "@radix-ui/react-icons";

const ListingReviews = () => {
  const reviews = [
    { name: "Jose", date: "December 2021", comment: "Host was very attentive.", image: AvatarImage },
    { name: "Shayna", date: "December 2021", comment: "Wonderful neighborhood, cozy studio, and great host.", image: AvatarImage },
    { name: "Vladko", date: "November 2020", comment: "This is an amazing place. Very clean and organized.", image: AvatarImage },
    { name: "Luke", date: "December 2021", comment: "Nice place to stay!", image: AvatarImage },
    { name: "Josh", date: "November 2021", comment: "Well designed and fun space with lots of energy.", image: AvatarImage },
    { name: "Jennifer", date: "January 2022", comment: "This is amazing place. It has everything one needs for a monthly business stay. Very clean and organized place. Amazing hospitality affordable price.", image: AvatarImage },
  ];

  const ratings = [
    { title: "Cleanliness", value: 5.0 },
    { title: "Communication", value: 5.0 },
    { title: "Check-in", value: 5.0 },
    { title: "Accuracy", value: 5.0 },
    { title: "Location", value: 4.9 },
    { title: "Value", value: 4.7 },
  ];

  return (
    <div className="flex flex-col items-start gap-8 w-full">
      {/* Review Header */}
      <h2 className="flex items-center text-2xl font-medium text-black gap-2">
        <StarIcon className="w-6 h-6 text-red-500" />
        <span>5.0</span>
        <span className="text-gray-500">·</span>
        <span>7 reviews</span>
      </h2>

      {/* Ratings Section */}
      <div className="flex items-start gap-20 self-stretch">
        <div className="flex flex-col gap-4 pr-20 flex-[1_0_0]">
          {ratings.slice(0, 3).map((rating, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-gray-800">
              <span className="text-black text-base font-normal leading-6 flex-1">{rating.title}</span>
              <div className="relative w-64 h-2 bg-gray-300 rounded-full">
                <div
                  className="absolute top-0 left-0 h-2 bg-black rounded-full "
                  style={{ width: `${rating.value * 20}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-black">{rating.value.toFixed(1)}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 pr-20 flex-[1_0_0]">
          {ratings.slice(3).map((rating, index) => (
            <div key={index} className="flex items-center gap-4 self-stretch w-full">
              <span className="text-black text-base font-normal leading-6 flex-1">{rating.title}</span>
              <div className="relative w-64 h-2 bg-gray-300 rounded-full">
                <div
                  className="absolute top-0 left-0 h-2 bg-black rounded-full"
                  style={{ width: `${rating.value * 20}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-black">{rating.value.toFixed(1)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col gap-10 w-full">
        {[0, 3].map((startIndex) => (
          <div key={startIndex} className="flex gap-10 w-full">
            {reviews.slice(startIndex, startIndex + 3).map((review, index) => (
              <div key={index} className="flex flex-col gap-4 w-1/3">
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={`${review.name}'s avatar`}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-medium text-black">{review.name}</span>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                </div>
                <p className="text-base text-black">{review.comment}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-black bg-white shadow-sm"
>
        Show all 12 reviews
      </button>
    </div>
  );
};

export default ListingReviews;
