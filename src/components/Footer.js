import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-image">
        <img
          src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
          alt="Little Lemon Logo"
        />
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social Media Links</h4>
          <ul>
            <li>Address</li>
            <li>Phone number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
