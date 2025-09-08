import React, { useState } from 'react';
import BookingForm from './BookingForm';

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
        <BookingForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}