import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginFormPage from './components/LoginForm';
import SignupFormPage from './components/SignupForm';
import Navigation from './components/Navigation';
import './index.css'

function App() {
  const location = useLocation();
  const shouldApplyBackground = location.pathname !== '/login' && location.pathname !== '/signup';


  const restrictedPaths = ['/login', '/signup'];
  const renderNavigation = !restrictedPaths.includes(location.pathname);

  return (
    <div className={`container ${shouldApplyBackground ? 'with-background' : ''}`}>
      {renderNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/login" element={<LoginFormPage />} />
        <Route path="/signup" element={<SignupFormPage />} />
      </Routes>
    </div>
  );
}


export default App;
