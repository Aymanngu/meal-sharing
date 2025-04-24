import React from 'react';
import './App.css';
import MealsList from './components/MealsList/MealsList'; // Importér MealsList i stedet for HomePage

function App() {
  return (
    <div className="App">
      <MealsList /> {/* Vis MealsList komponenten */}
    </div>
  );
}

export default App;
