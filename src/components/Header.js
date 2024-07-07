import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">SuppliesPro</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/food-supplements">Food Supplements</Link></li>
          <li><Link to="/sports-equipments">Sports Equipments</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="user-section">
        <Link to="/cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </div>
    </header>
  );
}

export default Header;