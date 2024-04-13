import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from './components/SearchForm/SearchForm.component';
import UrlSearch from './components/UrlSearch/UrlSearch.component';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/:id" element={<UrlSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
