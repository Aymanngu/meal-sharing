import express from 'express';
const router = express.Router();

// Sample data (you can replace it with actual database calls)
const meals = [
  { id: 1, name: 'Spaghetti Bolognese', price: 15 },
  { id: 2, name: 'Chicken Curry', price: 12 },
];

// GET all meals
router.get('/', (req, res) => {
  res.json(meals);
});

// POST a new meal
router.post('/', (req, res) => {
  const newMeal = req.body;
  meals.push(newMeal); // Replace with actual database insert
  res.status(201).json(newMeal);
});

// GET meal by ID
router.get('/:id', (req, res) => {
  const meal = meals.find(m => m.id === parseInt(req.params.id));
  if (!meal) return res.status(404).send('Meal not found');
  res.json(meal);
});

// PUT update a meal by ID
router.put('/:id', (req, res) => {
  const meal = meals.find(m => m.id === parseInt(req.params.id));
  if (!meal) return res.status(404).send('Meal not found');
  Object.assign(meal, req.body); // Update meal with new data
  res.json(meal);
});

// DELETE meal by ID
router.delete('/:id', (req, res) => {
  const mealIndex = meals.findIndex(m => m.id === parseInt(req.params.id));
  if (mealIndex === -1) return res.status(404).send('Meal not found');
  meals.splice(mealIndex, 1); // Remove meal from array (replace with DB deletion)
  res.status(200).json({ message: 'Meal deleted' });
});

export default router;
