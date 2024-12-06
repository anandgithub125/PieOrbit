import {useContext} from "react";
import { ItemContext } from "../context/ItemContext";

const Table = () => {
  const tHeading = ["Name", "Category", "Price", "Date Added"];
  const tableStyles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      border: '1px solid #e5e7eb', 
    },
    thead: {
      backgroundColor: '#f3f4f6', 
    },
    th: {
      border: '1px solid #d1d5db',
      padding: '8px 16px', 
      textAlign: 'left',
    },
    td: {
      border: '1px solid #d1d5db', 
      padding: '8px 16px', 
      textAlign: 'left',
    },
    center: {
      textAlign: 'center',
    },
    paginationControls: {
      marginTop: '16px', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#3b82f6', 
      color: 'white',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
    },
    disabledButton: {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  };
  
  const { filteredItems, currentPage, setCurrentPage, itemsPerPage } =
    useContext(ItemContext);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div>
    <table style={tableStyles.table}>
      <thead>
        <tr style={tableStyles.thead}>
          {tHeading.map((item, index) => (
            <th style={tableStyles.th} key={index}>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <tr key={item.id}>
              <td style={tableStyles.td}>{item.name}</td>
              <td style={tableStyles.td}>{item.category}</td>
              <td style={tableStyles.td}>${item.price.toFixed(2)}</td>
              <td style={tableStyles.td}>
                {new Date(item.dateAdded).toLocaleDateString()}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" style={{ ...tableStyles.td, ...tableStyles.center }}>
              Not found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  
    <div style={tableStyles.paginationControls}>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        style={{
          ...tableStyles.button,
          ...(currentPage === 1 && tableStyles.disabledButton),
        }}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        style={{
          ...tableStyles.button,
          ...(currentPage === totalPages && tableStyles.disabledButton),
        }}
      >
        Next
      </button>
    </div>
  </div>
  
  );
};

export default Table;
