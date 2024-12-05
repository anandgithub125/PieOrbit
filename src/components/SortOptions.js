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
   const { setSortOption } = useContext(ItemContext);

   const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  return (
    <div className="mb-5">
      <select
        onChange={handleSortChange}
        className="border rounded px-4 py-2"
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
