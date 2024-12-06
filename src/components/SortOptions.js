import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

const SortOptions = () => {

    const sortOptions = [
        { label: "Sort By", value: "" },
        { label: "Name (A-Z)", value: "nameAsc" },
        { label: "Name (Z-A)", value: "nameDesc" },
        { label: "Price (Low to High)", value: "priceAsc" },
        { label: "Price (High to Low)", value: "priceDesc" },
      ];

      const sortStyles = {
        container: {
          marginBottom: '20px', 
        },
        select: {
          border: '1px solid #d1d5db',
          borderRadius: '4px', 
          padding: '8px 16px', 
          fontSize: '16px',
          cursor: 'pointer',
        },
      };
   const { setSortOption } = useContext(ItemContext);

   const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <div style={sortStyles.container}>
      <select
        onChange={handleSortChange}
        style={sortStyles.select}
      >{sortOptions.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
        
      </select>
    </div>
  );
};

export default SortOptions;
