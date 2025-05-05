import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MealsList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);

  return (
    <div>
      <h2>Meals List</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <Link to={`/meals/${meal.id}`}>{meal.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
