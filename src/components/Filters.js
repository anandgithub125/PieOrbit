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

  const filterStyles = {
    container: {
      marginBottom: '20px', 
      display: 'flex', 
      gap: '16px', 
    },
    select: {
      border: '1px solid #d1d5db', 
      borderRadius: '4px', 
      padding: '8px 16px', 
      fontSize: '16px',
      width: 'auto',
      cursor: 'pointer',
    },
  };

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
    <div style={filterStyles.container}>
      <select 
       value={selectedCategory}
       onChange={handleCategoryChange}
       style={filterStyles.select}>
        {categoiesOptions.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      <select 
       value={priceRange.join("-")}
       onChange={handlePriceRangeChange}
       style={filterStyles.select}>
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
