import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/index.js';
import './Navigation.css';
import logo from '../../imgs/logoImgs/canal-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import SecondNavBar from '../SecondNavBar/index.js';
import { Link } from 'react-router-dom';



function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  let cartItems = useSelector(state => state.carts.cartItems);



  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    let quantity = 0;
    let price = 0;
    cartItems.forEach(item => {
      quantity += item.quantity;
      price += item.quantity * item.price;
    });
    setTotalQuantity(quantity);
  }, [cartItems]);

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
            <div className="links">
                    <Link to="https://github.com/aciffone23/Amazon-Clone/wiki">
                        <i className="fab fa-github-square"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/angelo-ciffone-8a8645248/">
                        <i className="fab fa-linkedin"></i>
                    </Link>
                </div>
            <div
                className="session-links"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ProfileButton user={sessionUser} />
                {showDropdown && sessionUser && (
                <div className="dropdown-menu" />
                )}
            </div>
                <NavLink to="/returns-orders" className="placeholder-link">
                    Orders
                </NavLink>
                <Link to="/cart">
                  <FontAwesomeIcon
                      className="cart-icon"
                      icon={faShoppingCart}
                      size="2x" 
                      style={{ color: "#ffffff" }}
                  />
                  {totalQuantity > 0 && (
              <span className="cart-quantity">{totalQuantity}</span>
            )}
                </Link>
            </div>
      </header>
      <SecondNavBar />
    </div>
  );
}

export default Navigation;
