import React from "react";

const SortOptions = () => {
   const sortName = ["Sort By", "Name (A-Z)", "Price (Low to High)", "Price (High to Low)"];
   const sortValue = ["", "nameAsc", "nameDesc", "priceAsc", "priceDesc"]
  return (
    <div className="mb-5">
      <select
        // onChange={}
        className="border rounded px-4 py-2"
      >{sortName.map((item, index)=> 
        <option key ={index}  value={sortValue[index]}>{item}</option>
      )}
        
      </select>
    </div>
  );
};

export default SortOptions;
