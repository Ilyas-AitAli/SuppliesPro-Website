import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import FoodSupplements from './components/FoodSupplements';
import SportsEquipments from './components/SportsEquipments';
import ContactPage from './components/ContactUs';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/food-supplements" element={<FoodSupplements />} />
            <Route path="/sports-equipments" element={<SportsEquipments />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:category/:productId" element={<ProductDetail />} />
          </Routes>

        </div>
      </Router>
    </CartProvider>
  );
}

export default App;