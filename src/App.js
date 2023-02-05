import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container-fluid'>
      <div className='row mt-5'>
        <div className='col-xl-10 col-lg-8 col-md-6 ms-auto mt-3'>
          <Cards/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
