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
  
    const searchStyles = {
      container: {
        marginBottom: '20px', 
      },
      input: {
        width: '100%', 
        border: '1px solid #d1d5db', 
        borderRadius: '4px', 
        padding: '8px 16px', 
        fontSize: '16px',
        outline: 'none',
      },
    };

  return (
    <div style={searchStyles.container}>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        style={searchStyles.input}
      />
    </div>
  );
};

export default SearchBar;
