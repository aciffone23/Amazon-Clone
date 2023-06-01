import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginFormPage from './components/LoginForm';
import SignupFormPage from './components/SignupForm';
import Navigation from './components/Navigation';
import { Navigate } from 'react-router-dom';
import './index.css'
import ProductShow from './components/ProductShow';
// import ProductShow from './components/ProductShow';

function App() {
  const location = useLocation();
  const shouldApplyBackground = location.pathname === '/';


  const renderNavigation = !location.pathname.startsWith('/login') && !location.pathname.startsWith('/signup');


  return (
    <div className={`container ${shouldApplyBackground ? 'with-background' : ''}`}>
      <Routes>
        <Route path="/" element={renderNavigation && <Navigation />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/signup" element={<SignupFormPage />} />
        <Route path="/products" element={renderNavigation && <Navigation />}  />
        <Route path="/:category" element={renderNavigation && <Navigation />}  />
        <Route path="/products/:id" element={renderNavigation && <Navigation />}  />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}


export default App;
