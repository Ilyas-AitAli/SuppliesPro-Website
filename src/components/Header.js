import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
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
          <li><Link to="/client-progress">Our Clients Progress</Link></li> 
        </ul>
      </nav>
      <div className="user-section">
        <Link to="/cart">Cart</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">LogIn</Link>
      </div>
    </header>
  );
}

export default Header;
