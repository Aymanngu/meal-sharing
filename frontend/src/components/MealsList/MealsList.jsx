import React, { useState, useEffect } from 'react';
import Meal from './Meal';
import './MealsList.css';

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/meals')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched meals:', data);
        setMeals(data);
      })
      .catch((error) => console.error('Error fetching meals:', error));
  }, []);

  return (
    <div>
      <h2>Meals</h2>
      <div className="meals-grid">
        {meals.map((meal) => (
          <Meal key={meal.id} meal={meal} />  
        ))}
      </div>
    </div>
  );
};

export default MealsList;
