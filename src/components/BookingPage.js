import React, { useState } from 'react';

export default function BookingPage() {
  const [form, setForm] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Reservation submitted!');
    setForm({
      name: '',
      date: '',
      time: '',
      guests: 1,
      occasion: '',
    });
  };

  return (
    <section className="booking-section">
      <div className="booking-container">
        <h2 className="booking-title">Reserve a Table</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="booking-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="booking-field">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="booking-field">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="booking-field">
            <label htmlFor="guests">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="20"
              value={form.guests}
              onChange={handleChange}
              required
            />
          </div>
          <div className="booking-field">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={form.occasion}
              onChange={handleChange}
              required
            >
              <option value="">Select Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button type="submit" className="booking-btn">Book Now</button>
        </form>
      </div>
    </section>
  );
}