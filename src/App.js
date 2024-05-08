
import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
      <h1 className='text-3xl font-medium text-red-500'>Krishna</h1>
      <Headers/>
      <Body/>
      <Sidebar/>
      <Footer/>
    </div>
  );
}

export default App;
