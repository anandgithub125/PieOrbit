import  { createContext, useState, useEffect } from "react";
import data from "../constants/data.json";
import { useSorting } from "../hooks/useSorting"; 
export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState([]);
  const [filters, setFilters] = useState({ category: "", priceRange: [0, 300] });
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { 
    sortByNameAsc,
    sortByNameDesc,
    sortByPriceAsc,
    sortByPriceDesc
  } = useSorting(); 

  useEffect(() => {
    let filteredResults = [...data];

    if (filters.category) {
      filteredResults = filteredResults.filter(
        (item) => item.category === filters.category
      );
    }
    filteredResults = filteredResults.filter(
      (item) =>
        item.price >= filters.priceRange[0] && item.price <= filters.priceRange[1]
    );

    if (searchTerm) {
      filteredResults = filteredResults.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) 

      );
    }

  
    if (sortOption === "nameAsc") {
      filteredResults.sort(sortByNameAsc);
    } else if (sortOption === "nameDesc") {
      filteredResults.sort(sortByNameDesc);
    } else if (sortOption === "priceAsc") {
      filteredResults.sort(sortByPriceAsc);
    } else if (sortOption === "priceDesc") {
      filteredResults.sort(sortByPriceDesc);
    }

    setFilteredItems(filteredResults);
  }, [filters, searchTerm, sortOption, sortByNameAsc, sortByNameDesc, sortByPriceAsc, sortByPriceDesc]);

  const value = {
    filteredItems,
    filters,
    setFilters,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    currentPage,
    setCurrentPage,
    itemsPerPage,
  };

  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
};
