import React from 'react'
import resturantFood from '../images/restauranfood.jpg';

export default function Main() {
  return (
    <main>
      <section className='main-text'>
        <header>
          <h1 className='main-title'>Little Lemon</h1>
          <h2 className='main-subtitle'>Chicago</h2>
        </header>
        <p className='main-description'>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </p>
        <button className='main-button'>Reserve a Table</button>
      </section>
      <figure className='main-image' style={{ backgroundImage: `url(${resturantFood})` }}>
        {/* Optionally add <img> for accessibility */}
        <img src={resturantFood} alt="Restaurant food" style={{ display: 'none' }} />
      </figure>
    </main>
  )
}
