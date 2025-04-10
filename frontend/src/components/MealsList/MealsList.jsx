import React, { useState, useEffect } from 'react';

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/meals')
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.error('Error fetching meals:', error));
  }, []);

  return (
    <div>
      <h2>Meals</h2>
      <div>
        {meals.map((meal) => (
          <div key={meal.id} className="meal">
            <h3>{meal.name}</h3>
            <p>{meal.description || 'No description available'}</p>
            <p>Price: ${meal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsList;
