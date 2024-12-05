import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";

const Pagination = ({ totalItems }) => {
  const { currentPage, setCurrentPage, itemsPerPage } = useContext(ItemContext);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center mt-5">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`mx-2 px-4 py-2 rounded ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
