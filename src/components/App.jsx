import React, { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from '../pages/Details';
import Home from '../pages/Home';
import Header from './Header';

const App = () => {
  return (
    <StrictMode className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Details />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App;
