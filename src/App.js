import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Charts from './components/Charts/Charts';

function App() {
  return (
    <>
    <Navbar/>
    {/* content */}
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-xl-10 col-lg-8 col-md-6 ms-auto mt-3'>
          <Cards/>
          <Charts/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
