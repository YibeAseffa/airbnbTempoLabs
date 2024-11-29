import React from "react";
import Navbar from "./Navbar"; // Ensure correct path for Navbar
import AirbnbFooter from "./AirbnbFooter"; // Ensure correct path for AirbnbFooter
import AirbnbSearch from "./AirbnbSearch";

//Individual comoponents
const  App = () => {
  return (
    <div>
      <Navbar />
      <AirbnbSearch/>
      <AirbnbFooter />
      
      
    </div>
  )


}

//Hompepage component 
// const App = () => {
//   return (
//     <div className="flex flex-col items-center w-screen overflow-x-hidden">
//       {/* Section 1 */}
//       <div className="flex flex-col items-center gap-6 w-full px-4 lg:px-20 py-6 lg:py-12 bg-black">
//         {/* Navbar */}
//         <Navbar />

//         {/* Search Bar */}
//         <AirbnbSearch />

//         {/* Big Card Section
//         <div className="flex justify-center items-center w-full h-[640px]">
//           <div className="relative w-full h-full">
//             <img
//               src={BigCardImage}
//               alt="Modern House"
//               className="w-full h-full object-cover rounded-lg"
//             />
//             <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 text-center text-white">
//               <h1 className="text-4xl font-bold">Not sure where to go? Perfect.</h1>
//               <button className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
//                 I’m flexible
//               </button>
//             </div>
//           </div>
//         </div> */}
//       </div>

//       {/* Inspirations Section */}
//       {/* <div className="w-full px-4 lg:px-20 py-6 lg:py-12 bg-white">
//         <Inspirations />
//       </div> */}

//       {/* Footer */}
//       <AirbnbFooter />
//     </div>
//   );
// };

export default App;
