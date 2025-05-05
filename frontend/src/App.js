import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import MealsList from './components/MealsList/MealsList';
import MealDetail from './components/MealDetail/MealDetail';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/meals" element={<MealsList />} />
        <Route path="/meals/:id" element={<MealDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
