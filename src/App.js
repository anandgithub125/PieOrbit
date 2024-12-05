import React from "react";
import { ItemProvider } from "./context/ItemContext";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SortOptions from "./components/SortOptions";
import Table from "./components/Table";

const App = () => (
  <ItemProvider>
    <div className="container mx-auto p-5">
      <h1 className="text-2xl text-center font-bold mb-5">PieOrbit Item List</h1>
      <SearchBar />
      <Filters />
      <SortOptions />
      <Table />
    </div>
  </ItemProvider>
);

export default App;
