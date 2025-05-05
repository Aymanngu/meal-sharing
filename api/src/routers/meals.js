import express from 'express';
const router = express.Router();

const meals = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    price: 15,
    location: 'Rome',
    when: '2025-04-24T18:00:00Z',
    description: 'A classic Italian pasta dish',
    available_reservations: 5
  },
  {
    id: 2,
    name: 'Chicken Curry',
    price: 12,
    location: 'London',
    when: '2025-04-25T19:00:00Z',
    description: 'A spicy, flavorful chicken dish',
    available_reservations: 5
  }
];

router.get('/', (req, res) => {
  res.json(meals);
});

router.post('/', (req, res) => {
  const newMeal = req.body;
  meals.push(newMeal);
  res.status(201).json(newMeal);
});

router.get('/:id', (req, res) => {
  const meal = meals.find(m => m.id === parseInt(req.params.id));
  if (!meal) return res.status(404).send('Meal not found');
  res.json(meal);
});

router.put('/:id', (req, res) => {
  const meal = meals.find(m => m.id === parseInt(req.params.id));
  if (!meal) return res.status(404).send('Meal not found');
  Object.assign(meal, req.body);
  res.json(meal);
});

router.delete('/:id', (req, res) => {
  const mealIndex = meals.findIndex(m => m.id === parseInt(req.params.id));
  if (mealIndex === -1) return res.status(404).send('Meal not found');
  meals.splice(mealIndex, 1);
  res.status(200).json({ message: 'Meal deleted' });
});

export default router;
