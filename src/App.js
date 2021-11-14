import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home';
import Archive from './components/pages/Archive';
import About from './components/pages/About';
import OnlyWatame from './components/pages/OnlyWatame';


function App() {
  return (
    <>
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/archive' element={<Archive/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/onlywatame' element={<OnlyWatame/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
