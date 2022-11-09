import React from 'react';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/ProductDetails' element={<ProductDetails/>}/>    
          </Routes> 
        </BrowserRouter>
      </div>
  );
}