import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

const Pagination = ({ totalItems }) => {
  const { currentPage, setCurrentPage, itemsPerPage } = useContext(ItemContext);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginationStyles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '20px', 
    },
    button: {
      margin: '0 8px', 
      padding: '8px 16px', 
      borderRadius: '8px', 
      cursor: 'pointer',
      fontSize: '16px',
      border: 'none',
    },
    activeButton: {
      backgroundColor: '#3b82f6', 
      color: 'white',
    },
    inactiveButton: {
      backgroundColor: '#e5e7eb', 
      color: '#374151', 
    },
  };

  return (
    <div style={paginationStyles.container}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          style={{
            ...paginationStyles.button,
            ...(page === currentPage ? paginationStyles.activeButton : paginationStyles.inactiveButton),
          }}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
