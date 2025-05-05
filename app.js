import express from 'express';
import cors from 'cors';
import mealsRouter from './api/src/routers/meals.js';
import reservationsRouter from './api/src/routers/reservations.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.use('/api/meals', mealsRouter);
app.use('/api/reservations', reservationsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});