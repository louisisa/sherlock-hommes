import React, {} from 'react';
import './App.css';
import { Navbar } from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { Articleone } from './pages/articleone';
import { Home } from './pages/home';
import { Articlethree } from './pages/articlethree';
import { Articletwo } from './pages/articletwo';

import { About } from './pages/about';

import { Footer } from './components/footer';



function App() {

  

  return (
    <div className="App">
      

      <Navbar />
      
    
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/art1' element={<Articleone />} />
          <Route path='/art2' element={<Articletwo />} />
          <Route path='/art3' element={<Articlethree />} />
          <Route path='/about' element={<About/>} />
        </Routes>
      
      <Footer />


    </div>
  );
}

export default App;
