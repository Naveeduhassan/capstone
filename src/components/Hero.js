import React from 'react'
import greekSalad from '../assets/greek salad.jpg'
import bruchetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon dessert.jpg'
import delivery from '../assets/delivery.jpg'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-text'>
        <h1 className='hero-title'>This weeks Specials!</h1>
        <button className='hero-button'>Online Menu</button>
      </div>
      <div className='hero-cards'>
        <div className='hero-card'>
          <img src={greekSalad} alt='Greek Salad' className='hero-card-image' />
          <div className='hero-card-content'>
            <div className='hero-card-header'>
            <h3 className='hero-card-title'>Greek Salad</h3>
            <span className='hero-card-price'>$10.99</span>
            </div>
            <div className='hero-card-description'>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
            </div>
            <a href='#' className='hero-card-order'>Order a delivery
              <img src={delivery} alt='Delivery' className='hero-card-delivery-icon' />
            </a>
          </div>
        </div>
        <div className='hero-card'>
          <img src={bruchetta} alt='Bruchetta' className='hero-card-image' />
          <div className='hero-card-content'>
            <div className='hero-card-header'>
              <h3 className='hero-card-title'>Bruchetta</h3>
              <span className='hero-card-price'>$8.99</span>
            </div>
            <div className='hero-card-description'>
              <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil along with fresh tomatoes and basil.</p>
            </div>
            <a href='#' className='hero-card-order'>Order a delivery
              <img src={delivery} alt='Delivery' className='hero-card-delivery-icon' />
            </a>
          </div>
        </div>
        <div className='hero-card'>
          <img src={lemonDessert} alt='Lemon Dessert' className='hero-card-image' />
          <div className='hero-card-content'>
            <div className='hero-card-header'>
            <h3 className='hero-card-title'>Lemon Dessert</h3>
            <span className='hero-card-price'>$5.00</span>
            </div>
            <div className='hero-card-description'>
              <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined and made with love.</p>
            </div>
            <a href='#' className='hero-card-order'>Order a delivery
              <img src={delivery} alt='Delivery' className='hero-card-delivery-icon' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
