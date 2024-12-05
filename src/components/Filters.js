import React from "react";

const Filters = () => {
  const categoriesName = ["All Categories", "Electronics", "Books", "Clothing"];
  const categoriesValue = ["", "Electronics", "Books", "Clothing"];
  
  const pricesRange = [
    "All Prices",
    "Below $50",
    "$50 - $100",
    "Above $100"
  ];
  const priceValue = ["0-300", "0-50", "50-100", "100-300"];

  return (
    <div className="mb-5 flex gap-4">
      <select className="border rounded px-4 py-2">
        {categoriesName.map((item, index) => (
          <option key={index} value={categoriesValue[index]}>
            {item}
          </option>
        ))}
      </select>

      <select className="border rounded px-4 py-2">
        {pricesRange.map((item, index) => (
          <option key={index} value={priceValue[index]}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
