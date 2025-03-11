import express from 'express';
import mealsRouter from './api/src/routers/meals.js';
import reservationsRouter from './api/src/routers/reservations.js';

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Use the meals and reservations routers
app.use('/api/meals', mealsRouter);
app.use('/api/reservations', reservationsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
