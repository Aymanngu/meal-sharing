import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationError, setReservationError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/meals/${id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data))
      .catch((error) => console.error('Error fetching meal details:', error));
  }, [id]);

  const handleReservation = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          meal_id: id,
          name,
          phone,
          email,
        }),
      });

      if (response.ok) {
        alert('Reservation successful!');
        setName('');
        setPhone('');
        setEmail('');
        setReservationSuccess(true);
      } else {
        alert('Reservation failed.');
        setReservationError('Reservation failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      setReservationError('Something went wrong.');
    }
  };

  const handleReview = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          meal_id: id,
          description: reviewText,
        }),
      });

      if (response.ok) {
        alert('Review submitted!');
        setReviewText('');
      } else {
        alert('Failed to submit review.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!meal) {
    return <div>Loading meal details...</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{meal.name}</h2>
      <p>{meal.description || 'No description available'}</p>
      <p><strong>Price:</strong> ${meal.price}</p>
      <p><strong>Location:</strong> {meal.location || 'No location available'}</p>
      <p><strong>Date:</strong> {meal.when || 'No date available'}</p>

      {/* Reservation Form */}
      {meal.available_reservations > 0 ? (
        <form onSubmit={handleReservation} style={{ marginTop: '30px' }}>
          <h3>Make a Reservation</h3>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Your Name" 
            required 
          /><br /><br />
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Your Phone Number" 
            required 
          /><br /><br />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Your Email" 
            required 
          /><br /><br />
          <button type="submit">Book a Seat</button>
        </form>
      ) : (
        <p>No seats available!</p>
      )}

      {reservationSuccess && <p>Reservation was successful!</p>}
      {reservationError && <p>{reservationError}</p>}

      {/* Review Form */}
      <form onSubmit={handleReview} style={{ marginTop: '30px' }}>
        <h3>Leave a Review</h3>
        <textarea 
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review"
          required
          rows="4"
          cols="50"
        /><br /><br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default MealDetails;
