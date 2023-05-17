import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Books from './component/Books';
import Navigation from './component/Navigation';
import Categories from './component/Category';

const App = () => (

  <div className="App">

    <Navigation />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="Categories" element={<Categories />} />
    </Routes>

  </div>
);

export default App;
