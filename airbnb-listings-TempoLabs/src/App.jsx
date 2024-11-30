import React from "react";

import AirbnbFooter from "./AirbnbFooter"; // Ensure correct path for AirbnbFooter
import {
  
  
  
  
  CalendarIcon,
  StarIcon,
  HeartIcon,
  Share2Icon,
  CheckIcon
  
} from "@radix-ui/react-icons";

import BigCardImage from "../src/assets/airbn-home-backgrd.PNG"; 
import AirbnbListingNavBar from "./AirbnbListingNavBar ";
import ListingContents from "./ListingContents";
import ListingReviews from "./ListingReviews ";
import ListingExploreFooter from "./ListingExploreFooter ";


const App = () => {
  const images = [
    { id: 1, src: "../src/assets/grid-images/living-room.png", alt: "Living room" },
    { id: 2, src: "../src/assets/grid-images//dining-area.png", alt: "Dining area" },
    { id: 3, src: "../src/assets/grid-images/kitchen.png", alt: "Kitchen" },
    { id: 4, src: "../src/assets/grid-images/dining-area2.png", alt: "Bedroom" },
    { id: 5, src: "../src/assets/grid-images/view.png", alt: "View from window" },
  ];

  const thingsToKnow = {
    houseRules: [
      { icon: <CalendarIcon />, text: "Check-in: After 4:00 PM" },
      { icon: <CalendarIcon />, text: "Checkout: 10:00 AM" },
      { icon: <CalendarIcon />, text: "Self check-in with lockbox" },
      { icon: <CalendarIcon />, text: "Not suitable for infants (under 2 years)" },
      { icon: <CalendarIcon />, text: "No smoking" },
      { icon: <CalendarIcon />, text: "No pets" },
    ],
     healthAndSafety: [
    {
      icon:  <CalendarIcon />,
      text: "Committed to Airbnb’s enhanced cleaning process. Show more",
    },
    {
      icon:  <CalendarIcon />,
      text: "Airbnb's social-distancing and other COVID-19-related guidelines apply",
    },
    { icon:  <CalendarIcon />,text: "Carbon monoxide alarm" },
    { icon: <CalendarIcon />, text: "Smoke alarm" },
    {
      icon:  <CalendarIcon />,
      text: "Security Deposit - if you damage the home, you may be charged up to $566",
    },
  ],
  cancellationPolicy: [
    { text: "Free cancellation before Feb 14" },
  ],
  };
  return (
    <div>
<div className="px-8 py-8 md:px-20 md:py-16 flex flex-col gap-12 w-full bg-white-50">
      <AirbnbListingNavBar />
      {/* Header Section */}
      <header className="flex justify-between items-start border-b pb-4">
        {/* Left Section */}
        <div className="max-w-[70%]">
          <h1 className="text-2xl font-semibold">Bordeaux Getaway</h1>
          <div className="flex flex-wrap gap-2 text-gray-700 text-sm">
            <span className="flex items-center gap-1">
              <StarIcon className="w-4 h-4 text-red-500" />
              5.0
            </span>
            <span>· 7 reviews <spn></spn>·</span>
            
             <span  className="w-4 h-4 text-red-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M9.50004 5.83341L12.1667 3.16675H3.83337L6.50004 5.83341" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.5 9.33325C11.5 11.2662 9.933 12.8333 8 12.8333C6.067 12.8333 4.5 11.2662 4.5 9.33325C4.5 7.40026 6.067 5.83325 8 5.83325C9.933 5.83325 11.5 7.40026 11.5 9.33325Z" stroke="#DE3151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span><span> Superhost</span>
            
            <span>· <a href="#" className="underline">Bordeaux, France</a></span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4">
          <p className="flex items-center gap-2 text-gray-700 cursor-pointer">
             <Share2Icon className="w-5 h-5" />Share
          </p>
          <p className="flex items-center gap-2 text-gray-700 cursor-pointer">
            <HeartIcon className="w-5 h-5" /> Save
          </p>
        </div>
      </header>

   {/* Image Grid Section */}
<div className="relative grid grid-cols-3 gap-2 h-[400px] w-full rounded-2xl overflow-hidden">
  {/* Main Image */}
  <div className="col-span-3 md:col-span-2 h-full">
    <img
      src={images[0].src}
      alt={images[0].alt}
      className="w-full h-full rounded-lg object-cover"
    />
  </div>
  
  {/* Small Images */}
  <div className="hidden md:grid grid-cols-2 gap-2">
    {images.slice(1, 5).map((image) => (
      <img
        key={image.id}
        src={image.src}
        alt={image.alt}
        className="w-full h-full rounded-lg object-cover"
      />
    ))}
  </div>

  {/* Show All Photos Button */}
  <button className="absolute bottom-4 right-4 bg-white px-4 py-2 text-sm font-semibold border border-gray-300 rounded-full shadow-md">
    Show all photos
  </button>
</div>


      <ListingContents />
      <hr className="border-0 border-t border-gray-300  w-full" />
      <ListingReviews />
      <hr className="border-0 border-t border-gray-300  w-full" />
    
      {/* Where You'll Be Section */}
<div className="flex flex-col items-start gap-6 self-stretch">
  {/* Section Title */}
  <h2 className="text-black text-2xl font-bold">Where you'll be</h2>

  {/* Map Container */}
  <div className="h-80 w-full overflow-hidden rounded-lg">
    <img
      src="../src/assets/Map.PNG"
      alt="Map of Bordeaux"
      className="w-full h-full object-cover"
    />
        </div>
     

  {/* Location Description */}
  <div className="flex flex-col items-start gap-4">
    <h3 className="text-black text-lg font-medium">
      Bordeaux, Nouvelle-Aquitaine, France
    </h3>
    <p className="text-black text-base font-normal leading-6">
      Very dynamic and appreciated district by the people of Bordeaux thanks to
      rue St James and place Fernand Lafargue. Home to many historical
      monuments such as the Grosse Cloche, the Porte de Bourgogne and the Porte
      Cailhau, and cultural sites such as the Aquitaine Museum.
    </p>
    <span className="text-black text-base font-medium underline cursor-pointer hover:text-gray-700">
      Show more ›
    </span>
  </div>
      </div>
      {/* Host Information */}
      <div className="flex flex-col items-start gap-8 w-full">
        {/* Host Information */}
         <hr className="border-0 border-t border-gray-300  w-full" />
  <div className="flex items-center gap-6 w-full">
    <img
      src="../src/assets/avatar.png" // Replace with the host's profile image
      alt="Host Avatar"
      className="w-14 h-14 rounded-full object-cover"
    />
    <div>
      <h3 className="text-black text-2xl font-medium">Hosted by Ghazal</h3>
      <p className="text-gray-500 text-sm">Joined May 2021</p>
    </div>
  </div>

  {/* Host Badges */}
  <div className="flex items-center gap-6 w-full">
    <span className="flex items-center gap-2 text-black text-base font-medium">
      <StarIcon className="w-4 h-4 text-red-500" /> 12 Reviews
    </span>
    <span className="flex items-center gap-2 text-black text-base font-medium">
      <StarIcon className="w-4 h-4 text-red-500" /> Identity verified
    </span>
    <span className="flex items-center gap-2 text-black text-base font-medium">
      <span>🏆</span> Superhost
    </span>
  </div>

  {/* Host Description */}
  <div className="flex flex-col gap-4">
    <p className="text-black text-base font-medium">Ghazal is a Superhost.</p>
    <p className="text-gray-500 text-base leading-6">
      Superhosts are experienced, highly rated hosts who are committed to
      providing great stays for guests.
    </p>
    <p className="text-gray-500 text-base">Response rate: 100%</p>
    <p className="text-gray-500 text-base">Response time: within an hour</p>
  </div>

  {/* Contact Button */}
  <button className="flex items-center justify-center gap-2 px-4 py-4 border border-black rounded-lg bg-white shadow">
    Contact Host
  </button>

  {/* Security Disclaimer */}
  <div className="flex items-start gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 20.5C5 20.6326 4.94732 20.7598 4.85355 20.8536C4.75979 20.9473 4.63261 21 4.5 21H4V21.5C4 21.6326 3.94732 21.7598 3.85355 21.8536C3.75979 21.9473 3.63261 22 3.5 22C3.36739 22 3.24021 21.9473 3.14645 21.8536C3.05268 21.7598 3 21.6326 3 21.5V21H2.5C2.36739 21 2.24021 20.9473 2.14645 20.8536C2.05268 20.7598 2 20.6326 2 20.5C2 20.3674 2.05268 20.2402 2.14645 20.1464C2.24021 20.0527 2.36739 20 2.5 20H3V19.5C3 19.3674 3.05268 19.2402 3.14645 19.1464C3.24021 19.0527 3.36739 19 3.5 19C3.63261 19 3.75979 19.0527 3.85355 19.1464C3.94732 19.2402 4 19.3674 4 19.5V20H4.5C4.63261 20 4.75979 20.0527 4.85355 20.1464C4.94732 20.2402 5 20.3674 5 20.5ZM6.5 22C6.40111 22 6.30444 22.0293 6.22221 22.0843C6.13999 22.1392 6.0759 22.2173 6.03806 22.3087C6.00022 22.4 5.99031 22.5006 6.00961 22.5975C6.0289 22.6945 6.07652 22.7836 6.14645 22.8536C6.21637 22.9235 6.30546 22.9711 6.40245 22.9904C6.49945 23.0097 6.59998 22.9998 6.69134 22.9619C6.7827 22.9241 6.86079 22.86 6.91573 22.7778C6.97068 22.6956 7 22.5989 7 22.5C7 22.3674 6.94732 22.2402 6.85355 22.1464C6.75979 22.0527 6.63261 22 6.5 22ZM22.5 2H22V1.5C22 1.36739 21.9473 1.24021 21.8536 1.14645C21.7598 1.05268 21.6326 1 21.5 1C21.3674 1 21.2402 1.05268 21.1464 1.14645C21.0527 1.24021 21 1.36739 21 1.5V2H20.5C20.3674 2 20.2402 2.05268 20.1464 2.14645C20.0527 2.24021 20 2.36739 20 2.5C20 2.63261 20.0527 2.75979 20.1464 2.85355C20.2402 2.94732 20.3674 3 20.5 3H21V3.5C21 3.63261 21.0527 3.75979 21.1464 3.85355C21.2402 3.94732 21.3674 4 21.5 4C21.6326 4 21.7598 3.94732 21.8536 3.85355C21.9473 3.75979 22 3.63261 22 3.5V3H22.5C22.6326 3 22.7598 2.94732 22.8536 2.85355C22.9473 2.75979 23 2.63261 23 2.5C23 2.36739 22.9473 2.24021 22.8536 2.14645C22.7598 2.05268 22.6326 2 22.5 2ZM19.92 6.87C17.4088 6.46601 15.0643 5.35617 13.16 3.67C13.1083 3.6189 13.0426 3.58418 12.9713 3.57017C12.8999 3.55616 12.826 3.56348 12.7588 3.59122C12.6916 3.61895 12.6341 3.66588 12.5934 3.72613C12.5527 3.78639 12.5306 3.85729 12.53 3.93L12.61 20.15C12.6133 20.2131 12.6322 20.2744 12.6651 20.3283C12.698 20.3822 12.7438 20.4271 12.7984 20.4589C12.853 20.4906 12.9146 20.5083 12.9778 20.5102C13.0409 20.5122 13.1035 20.4983 13.16 20.47C15.6842 19.3961 17.7634 17.4886 19.0502 15.066C20.337 12.6435 20.7535 9.8527 20.23 7.16C20.2162 7.08386 20.1789 7.01396 20.1232 6.96015C20.0676 6.90633 19.9966 6.87131 19.92 6.86V6.87Z"
        fill="#484848"
      />
    </svg>
    <p className="text-gray-500 text-xs leading-4">
      To protect your payment, never transfer money or communicate outside of
      the Airbnb website or app.
    </p>
  </div>
</div>


  <hr className="border-0 border-t border-gray-300  w-full" />
{/* Things to Know Section */}
<div className="flex flex-col items-start gap-6 self-stretch">
  <h2 className="text-black text-2xl font-bold">Things to know</h2>

  <div className="flex gap-6">
    {/* House Rules */}
    <div className="flex flex-col gap-4 flex-1">
      <h3 className="text-black text-base font-medium">House rules</h3>
      <ul className="flex flex-col gap-2">
        {thingsToKnow.houseRules.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <span className="w-6 h-6 flex items-center justify-center">
              {item.icon}
            </span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>

    {/* Health and Safety */}
    <div className="flex flex-col gap-4 flex-1">
      <h3 className="text-black text-base font-medium">Health & safety</h3>
      <ul className="flex flex-col gap-2">
        {thingsToKnow.healthAndSafety.map((item, index) => (
          <li key={index} className="flex items-center gap-4">
            <span className="w-6 h-6 flex items-center justify-center">
              {item.icon}
            </span>
            {item.text}
          </li>
        ))}
      </ul>
      <span className="text-black text-base font-medium underline">
        Show more ›
      </span>
    </div>

    {/* Cancellation Policy */}
    <div className="flex flex-col gap-4 flex-1">
      <h3 className="text-black text-base font-medium">
        Cancellation policy
      </h3>
      <ul className="flex flex-col gap-2">
        {thingsToKnow.cancellationPolicy.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
      <span className="text-black text-base font-medium underline">
        Show more ›
      </span>
    </div>
  </div>
</div>
  </div>
 <div className="px-8 py-8 md:px-20 md:py-16 flex flex-col gap-12 w-full bg-gray-50">
      <ListingExploreFooter />
        <hr className="border-0 border-t border-gray-300  w-full" />
        <AirbnbFooter />
        </div>
    
      </div>
  );
};

export default App;
