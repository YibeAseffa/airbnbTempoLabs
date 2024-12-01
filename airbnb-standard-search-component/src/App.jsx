import React from "react";

import NavBarStandardSearch from "./NavBarStandardSearch ";
import SearchListings from "./SearchListings ";

const App = () => {
  return (
    <div className="flex flex-col items-center w-screen overflow-x-hidden">
      <NavBarStandardSearch />
      <SearchListings/>
    </div>
  );
};

export default App;
