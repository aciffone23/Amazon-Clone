import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginFormPage from './components/LoginForm';
import SignupFormPage from './components/SignupForm';
import Navigation from './components/Navigation';
import { Navigate } from 'react-router-dom';
import './index.css'
import ProductShow from './components/ProductShow';
import SplashListings from './components/SplashListings';
import Footer from './components/Footer';
import ProductListings from './components/ProductListings';
// import ProductShow from './components/ProductShow';

function App() {
  const location = useLocation();
  const shouldApplyBackground = location.pathname === '/';


  const renderNavigation = !location.pathname.startsWith('/login') && !location.pathname.startsWith('/signup');

  

  return (
    <div className={`container ${shouldApplyBackground ? 'with-background' : ''}`}>
      <Routes>
        <Route path="/" element={
          <div>
          <Navigation />
          <SplashListings />
          <Footer />
          </div>} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/signup" element={<SignupFormPage />} />
        <Route path="/products" element={
          <div>
          <Navigation />
          <ProductListings />
          <Footer />
          </div>}  />
        <Route path="/products/:id" element={
          <div>
          <Navigation />
          <ProductShow />
          <Footer />
          </div>}  />
        <Route path="/products/category/:category" element={renderNavigation && <Navigation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}


export default App;
