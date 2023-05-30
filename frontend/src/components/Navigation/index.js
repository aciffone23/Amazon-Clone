import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/index.js';
import './Navigation.css';
import logo from '../../imgs/canal-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SecondNavBar from '../SecondNavBar/index.js';
import ProductListings from '../ProductListings/index.js';
import Footer from '../Footer/index.js';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className="navigation-container">
      <header className="header">
        <div className="navbar">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="Canal Logo" />
            </NavLink>
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" />
                <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="right-side-nav"> {/* New grouped div */}
            <div
                className="session-links"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ProfileButton user={sessionUser} />
                {showDropdown && sessionUser && (
                <div className="dropdown-menu">
                    {/* Dropdown menu content */}
                </div>
                )}
            </div>
            <div>
              <NavLink to="/returns-orders" className="placeholder-link">
                  Returns
                  <br/>
                  & Orders
              </NavLink>
              {/* <NavLink to="/cart" className="cart-link">
                  <FontAwesomeIcon icon="fa-sharp fa-regular fa-cart-minus" size="lg" style={{color: "#ffffff",}} />   
              </NavLink> */}
            </div>
          </div> 
        </div>
      </header>
      <SecondNavBar />
      <ProductListings />
      <Footer />
    </div>
  );
}

export default Navigation;
