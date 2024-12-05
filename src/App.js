  import './App.css';
import Filters from './components/Filters';
import SearchBar from './components/SearchBar';
import SortOptions from './components/SortOptions';
import Table from './components/Table';

function App() {
  return (
    <div >
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Item List</h1>
      <SearchBar/>
      <Filters/>
      <SortOptions/>
      <Table />
    </div>
    </div>
  );
}

export default App;
