import React from 'react';
import './Meal.css';

const Meal = ({ meal }) => {
  console.log('Meal data:', meal);

  const formattedDate = meal.when ? new Date(meal.when) : null;
  const displayDate = formattedDate && !isNaN(formattedDate) ? formattedDate.toLocaleDateString() : 'No date available';
  const displayLocation = meal.location || 'No location available';

  return (
    <div className="meal-card">
      <h3>{meal.name}</h3>
      <p>{meal.description || 'No description available'}</p>
      <p><strong>Price:</strong> ${meal.price}</p>
      <p><strong>Location:</strong> {displayLocation}</p>
      <p><strong>Date:</strong> {displayDate}</p>

      {/* Check if there are available reservations */}
      {meal.available_reservations > 0 ? (
        <form>
          <h4>Reserve a seat</h4>
          <input type="text" placeholder="Your Name" required />
          <input type="tel" placeholder="Your Phone" required />
          <input type="email" placeholder="Your Email" required />
          <button type="submit">Reserve</button>
        </form>
      ) : (
        <p>No seats available</p>
      )}
    </div>
  );
};

export default Meal;
