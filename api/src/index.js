const express = require('express');
const knex = require('knex');

//MySQL database
const db = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root', 
    database: 'meal_sharing'
  }
});

const app = express();
app.use(express.json());

//future-meals
app.get('/future-meals', async (req, res) => {
  try {
    const meals = await db('meals').where('when', '>', new Date()).orderBy('when');
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//past-meals
app.get('/past-meals', async (req, res) => {
  try {
    const meals = await db('meals').where('when', '<', new Date()).orderBy('when');
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//all-meals
app.get('/all-meals', async (req, res) => {
  try {
    const meals = await db('meals').orderBy('id');
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//first-meal
app.get('/first-meal', async (req, res) => {
  try {
    const meal = await db('meals').orderBy('id').first();
    if (meal) {
      res.json(meal);
    } else {
      res.status(404).json({ error: 'No meals found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//last-meal
app.get('/last-meal', async (req, res) => {
  try {
    const meal = await db('meals').orderBy('id', 'desc').first();
    if (meal) {
      res.json(meal);
    } else {
      res.status(404).json({ error: 'No meals found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
