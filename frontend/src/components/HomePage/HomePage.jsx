import React from "react";
import MealsList from "../MealsList/MealsList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Meal Sharing App</h1>
      <MealsList />
      <Link to="/meals">
        <button>See All Meals</button>
      </Link>
    </div>
  );
};

export default HomePage;
