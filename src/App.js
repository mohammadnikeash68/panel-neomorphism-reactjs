import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';
import Contents from './components/Contents/Contents';
import { BrowserRouter } from 'react-router-dom';

function App() {
 
  return (
    <>
    <BrowserRouter>
    <nav className="navbar navbar-expand-md m-2 py-0">
        <button
          type="button"
          className="navbar-toggler box-shadow1"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <div className="navbar-toggler-icon "></div>
        </button>
        <div className="navbar-collapse collapse " id="mynavbar">
        <div className="container-fluid">
            <div className="row">
    <Navbar/>
    {/* content */}
    
         <Contents/>
         </div>
          </div>
         </div>
      </nav>
    </BrowserRouter>

    </>
  );
}

export default App;
