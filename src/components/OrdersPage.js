import React, { useState } from 'react';

import greekSalad from './images/greek salad.jpg';
import bruchetta from './images/bruchetta.svg';
import lemonDessert from './images/lemon dessert.jpg';

const menuItems = [
  {
    id: 1,
    name: 'Greek Salad',
    image: greekSalad,
    description: 'Fresh salad with tomatoes, cucumbers, olives, and feta cheese.',
    price: '$12.99',
  },
  {
    id: 2,
    name: 'Bruschetta',
    image: bruchetta,
    description: 'Grilled bread topped with garlic, tomatoes, and olive oil.',
    price: '$8.99',
  },
  {
    id: 3,
    name: 'Lemon Dessert',
    image: lemonDessert,
    description: 'Sweet and tangy lemon dessert with whipped cream.',
    price: '$6.99',
  },
];

export default function OrdersPage() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = item => {
    setCart(prev => [...prev, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <section className="orders-section">
      <div className="orders-container">
        <h2 className="orders-title">Order Online</h2>
        <div className="orders-list">
          {menuItems.map(item => (
            <div className="order-card" key={item.id}>
              <img className="order-card-image" src={item.image} alt={item.name} />
              <div className="order-card-content">
                <h3 className="order-card-title">{item.name}</h3>
                <p className="order-card-description">{item.description}</p>
                <div className="order-card-footer">
                  <span className="order-card-price">{item.price}</span>
                  <button
                    className="order-card-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}