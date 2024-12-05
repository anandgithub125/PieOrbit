import React, { useState } from "react";


const SearchBar = () => {
 

  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Search by name..."
        // value={}
        // onChange={}
        className="w-full border rounded px-4 py-2"
      />
    </div>
  );
};

export default SearchBar;
