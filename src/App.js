import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import Result from './result';

function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='/result' element={<Result />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
