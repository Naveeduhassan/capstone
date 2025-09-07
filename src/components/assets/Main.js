import React from 'react'
import resturantFood from '../images/restauranfood.jpg';
export default function Main() {
  return (
    <main>
      <div className='main-text'>
        <h1 className='main-title'>Little Lemon</h1>
        <h2 className='main-subtitle'>Chicago</h2>
        <p className='main-description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button className='main-button'>Reserve a Table</button>
      </div>
      <div className='main-image' style={{ backgroundImage: `url(${resturantFood})` }}>
      </div>
    </main>
  )
}
