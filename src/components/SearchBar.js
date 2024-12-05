import { useState, useEffect, useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import useDebounce from "../hooks/useDebounce";

const SearchBar = () => {
    const { setSearchTerm } = useContext(ItemContext);
    const [searchInput, setSearchInput] = useState("");
  
    const debouncedSearchInput = useDebounce(searchInput, 300);
    useEffect(() => {
      setSearchTerm(debouncedSearchInput);
    }, [debouncedSearchInput, setSearchTerm]);
  

  return (
    <div className="mb-5">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full border rounded px-4 py-2"
      />
    </div>
  );
};

export default SearchBar;
