import React from 'react';
import './Meal.css';

const Meal = ({ meal }) => {
  console.log('Meal data:', meal);  // Log måltidsdata her for fejlsøgning
  
  const formattedDate = meal.when ? new Date(meal.when) : null;
  const displayDate = formattedDate && !isNaN(formattedDate) ? formattedDate.toLocaleDateString() : 'No date available';
  const displayLocation = meal.location || 'No location available'; // Fallback til location

  return (
    <div className="meal-card">
      <h3>{meal.name}</h3>
      <p>{meal.description || 'No description available'}</p>
      <p><strong>Price:</strong> ${meal.price}</p>
      <p><strong>Location:</strong> {displayLocation}</p>
      <p><strong>Date:</strong> {displayDate}</p>
    </div>
  );
};

export default Meal;
