import './App.css';
import AgePredictor from './new-component/AgePredictor';
import CatFacts from './new-component/CatFacts';
import Clock from './new-component/Clock';
import CryptoValues from './new-component/CryptoValues';
import DataTable from './new-component/DataTable';

function App() {
  return (
    <div className="App">
      <strong>ReactJs Admin Dashboard</strong>
     <Clock/>
     <DataTable/>
     <AgePredictor/>
     <CatFacts/>
     <CryptoValues/>

    </div>
  );
}

export default App;
