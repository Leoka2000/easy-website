import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Error from './Error';
import Home from './Components/Home';
import Form from './pages/pageContact/contactParent'
import Success from '../src/pages/pageContact/Success'
import ParentPortfolio from './pages/Portfolio/ParentPortfolio';





function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path='contactParent/' element={<Form />} />
          <Route path='Success/' element={<Success />} />
          <Route path='ParentPortfolio/' element={<ParentPortfolio />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
