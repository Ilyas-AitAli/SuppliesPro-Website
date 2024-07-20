import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Header_fr from './components_fr/Header_fr';
import Footer from './components/Footer';
import Footer_fr from './components_fr/Footer_fr';
import HomePage from './components/HomePage';
import HomePage_fr from './components_fr/HomePage_fr';
import FoodSupplements from './components/FoodSupplements';
import FoodSupplements_fr from './components_fr/FoodSupplements_fr';
import SportsEquipments from './components/SportsEquipments';
import SportsEquipments_fr from './components_fr/SportsEquipments_fr';
import AboutUs from './components/AboutUs';
import AboutUs_fr from './components_fr/AboutUs_fr';
import ContactPage from './components/ContactUs';
import ContactPage_fr from './components_fr/ContactUs_fr';
import Register from './components/Register';
import Register_fr from './components_fr/Register_fr';
import Login from './components/Login';
import Login_fr from './components_fr/Login_fr';
import Cart from './components/Cart';
import Cart_fr from './components_fr/Cart_fr';
import ProductDetail from './components/ProductDetail';
import ProductDetail_fr from './components_fr/ProductDetail_fr';
import ClientProgress from './components/ClientProgress';
import ClientProgress_fr from './components_fr/ClientProgress_fr';
import Compare from './components/Compare';
import Compare_fr from './components_fr/Compare_fr';
import Chat from './components/Chat';
import Chat_fr from './components_fr/Chat_fr';
import { CartProvider } from './context/CartContext';
import { CompareProvider } from './context/CompareContext';
import './App.css';

function App() {
  const [isFrench, setIsFrench] = useState(false);

  return (
    <CartProvider>
      <CompareProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Layout component={isFrench ? <HomePage_fr /> : <HomePage />} isFrench={isFrench} />} />
              <Route path="/food-supplements" element={<Layout component={isFrench ? <FoodSupplements_fr /> : <FoodSupplements />} isFrench={isFrench} />} />
              <Route path="/sports-equipments" element={<Layout component={isFrench ? <SportsEquipments_fr /> : <SportsEquipments />} isFrench={isFrench} />} />
              <Route path="/about-us" element={<Layout component={isFrench ? <AboutUs_fr /> : <AboutUs />} isFrench={isFrench} />} />
              <Route path="/contact-us" element={<Layout component={isFrench ? <ContactPage_fr /> : <ContactPage />} isFrench={isFrench} />} />
              <Route path="/register" element={<Layout component={isFrench ? <Register_fr /> : <Register />} isFrench={isFrench} />} />
              <Route path="/login" element={<Layout component={isFrench ? <Login_fr /> : <Login />} isFrench={isFrench} />} />
              <Route path="/cart" element={<Layout component={isFrench ? <Cart_fr /> : <Cart />} isFrench={isFrench} />} />
              <Route path="/client-progress" element={<Layout component={isFrench ? <ClientProgress_fr /> : <ClientProgress />} isFrench={isFrench} />} />
              <Route path="/compare" element={<Layout component={isFrench ? <Compare_fr /> : <Compare />} isFrench={isFrench} />} />
              <Route path="/product/:category/:productId" element={<Layout component={isFrench ? <ProductDetail_fr /> : <ProductDetail />} isFrench={isFrench} />} />

              {/* French Routes */}
              <Route path="/fr" element={<Layout component={<HomePage_fr />} isFrench />} />
              <Route path="/fr/food-supplements" element={<Layout component={<FoodSupplements_fr />} isFrench />} />
              <Route path="/fr/sports-equipments" element={<Layout component={<SportsEquipments_fr />} isFrench />} />
              <Route path="/fr/about-us" element={<Layout component={<AboutUs_fr />} isFrench />} />
              <Route path="/fr/contact-us" element={<Layout component={<ContactPage_fr />} isFrench />} />
              <Route path="/fr/register" element={<Layout component={<Register_fr />} isFrench />} />
              <Route path="/fr/login" element={<Layout component={<Login_fr />} isFrench />} />
              <Route path="/fr/cart" element={<Layout component={<Cart_fr />} isFrench />} />
              <Route path="/fr/client-progress" element={<Layout component={<ClientProgress_fr />} isFrench />} />
              <Route path="/fr/compare" element={<Layout component={<Compare_fr />} isFrench />} />
              <Route path="/fr/product/:category/:productId" element={<Layout component={<ProductDetail_fr />} isFrench />} />
            </Routes>
          </div>
        </Router>
      </CompareProvider>
    </CartProvider>
  );
}

const Layout = ({ component, isFrench }) => (
  <div>
    {isFrench ? <Header_fr /> : <Header />}
    {component}
    {isFrench ? <Footer_fr /> : <Footer />}
    {isFrench ? <Chat_fr /> : <Chat />}
  </div>
);

export default App;
