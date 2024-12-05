import React from "react";

const Table = () => {
  const tHeading = ["Name", "Category", "Price", "Date Added"];

  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {tHeading.map((item, index) => (
              <th className="border border-gray-300 px-4 py-2" key={index}>
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-gray-300 px-4 py-2">Name</td>
            <td className="border border-gray-300 px-4 py-2">Category</td>
            <td className="border border-gray-300 px-4 py-2">Price</td>
            <td className="border border-gray-300 px-4 py-2">Date</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
