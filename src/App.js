import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Read from './components/Read';
import Edit from './components/Edit';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
          <Route path='/edit/:id' element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App