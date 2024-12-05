import { useContext, useState } from "react";
import { ItemContext } from "../context/ItemContext";

const Filters = () => {
  const categoiesOptions  = [{ label: "All Categories", value: "" },
    { label: "Electronics", value: "Electronics" },
    { label: "Books", value: "Books" },
    { label: "Clothing", value: "Clothing" },
  ];
  const pricesOptions = [
    { label: "All Prices", value: "0-300" },
    { label: "Below $50", value: "0-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "Above $100", value: "100-300" },
  ];

  const { filters, setFilters } = useContext(ItemContext);
  const [selectedCategory, setSelectedCategory] = useState(filters.category);
  const [priceRange, setPriceRange] = useState(filters.priceRange);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handlePriceRangeChange = (e) => {
    const [min, max] = e.target.value.split("-").map(Number);
    setPriceRange([min, max]);
    setFilters((prev) => ({ ...prev, priceRange: [min, max] }));
  };

  return (
    <div className="mb-5 flex gap-4">
      <select 
       value={selectedCategory}
       onChange={handleCategoryChange}
      className="border rounded px-4 py-2">
        {categoiesOptions.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <select 
       value={priceRange.join("-")}
       onChange={handlePriceRangeChange}
      className="border rounded px-4 py-2">
        {pricesOptions.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
