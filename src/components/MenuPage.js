import React from 'react';

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

export default function MenuPage() {
  return (
    <section className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <div className="menu-list">
          {menuItems.map(item => (
            <div className="menu-card" key={item.id}>
              <img className="menu-card-image" src={item.image} alt={item.name} />
              <div className="menu-card-content">
                <h3 className="menu-card-title">{item.name}</h3>
                <p className="menu-card-description">{item.description}</p>
                <span className="menu-card-price">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}