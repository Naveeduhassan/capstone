import React from 'react'

const testimonials = [
  {
    name: "Client 1",
    image: "/images/client1.jpg",
    rating: "⭐⭐⭐⭐⭐",
    text: "This service transformed our business!"
  },
  {
    name: "Client 2",
    image: "/images/client2.jpg",
    rating: "⭐⭐⭐⭐",
    text: "Exceptional quality and support."
  },
  {
    name: "Client 3",
    image: "/images/client3.jpg",
    rating: "⭐⭐⭐⭐⭐",
    text: "Highly recommend to anyone looking for top-notch solutions."
  },
  // {
  //   name: "Client 4",
  //   image: "/images/client4.jpg",
  //   rating: "⭐⭐⭐⭐⭐",
  //   text: "A game changer for our organization."
  // }
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="testimonial-container">
        {testimonials.map((t, idx) => (
          <div className="testimonial-card" key={idx}>
            <div className="testimonial-rating">{t.rating}</div>
            <div className="client-info">
            <img className="testimonial-avatar" src={t.image} alt={t.name} />
            <div className="testimonial-name">{t.name}</div>
            </div>
            <div className="testimonial-text">"{t.text}"</div>
          </div>
        ))}
      </div>
    </section>
  )
}
