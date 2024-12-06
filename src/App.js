import React from "react";
import { ItemProvider } from "./context/ItemContext";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import SortOptions from "./components/SortOptions";
import Table from "./components/Table";

const App = () => (
  <ItemProvider>
  <div style={appStyles.container}>
  <h1 style={appStyles.heading}>PieOrbit Item List</h1>
      <SearchBar />
      <Filters />
      <SortOptions />
      <Table />
    </div>
  </ItemProvider>
);

const appStyles = {
  container: {
    maxWidth: '1200px', 
    margin: '0 auto', 
    padding: '20px',
  },
  heading: {
    fontSize: '24px', 
    textAlign: 'center',
    fontWeight: 'bold', 
    marginBottom: '20px', 
  },
};


export default App;
