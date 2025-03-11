import express from 'express';
const router = express.Router();

// Sample data (you can replace it with actual database calls)
const reservations = [
  { id: 1, name: 'Ayman Ngu', mealId: 1, guests: 2 },
  { id: 2, name: 'John Cena', mealId: 2, guests: 3 },
];

// GET all reservations
router.get('/', (req, res) => {
  res.json(reservations);
});

// POST a new reservation
router.post('/', (req, res) => {
  const newReservation = req.body;
  reservations.push(newReservation);
  res.status(201).json(newReservation);
});

// GET reservation by ID
router.get('/:id', (req, res) => {
  const reservation = reservations.find(r => r.id === parseInt(req.params.id));
  if (!reservation) return res.status(404).send('Reservation not found');
  res.json(reservation);
});

// PUT update a reservation by ID
router.put('/:id', (req, res) => {
  const reservation = reservations.find(r => r.id === parseInt(req.params.id));
  if (!reservation) return res.status(404).send('Reservation not found');
  Object.assign(reservation, req.body);
  res.json(reservation);
});

// DELETE reservation by ID
router.delete('/:id', (req, res) => {
  const reservationIndex = reservations.findIndex(r => r.id === parseInt(req.params.id));
  if (reservationIndex === -1) return res.status(404).send('Reservation not found');
  reservations.splice(reservationIndex, 1); 
  res.status(200).json({ message: 'Reservation deleted' });
});

export default router;
