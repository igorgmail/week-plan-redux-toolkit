import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';

function App() {
  console.log("-----Render APP");


  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
