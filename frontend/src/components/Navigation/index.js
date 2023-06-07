import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from '../ProfileButton/index.js';
import './Navigation.css';
import logo from '../../imgs/logoImgs/canalLogo.png';
import SecondNavBar from '../SecondNavBar/index.js';
import { Link } from 'react-router-dom';
import cartImg from '../../imgs/logoImgs/cartImg.png';
import LoginModal from '../ProductShow/Modal/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  const [showDropdown, setShowDropdown] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  let cartItems = useSelector(state => state.carts.cartItems);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');


  const handleAddToCart = () => {
    if (!sessionUser) {
      setShowModal(true);
      return;
    } 

    navigate('/cart');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      navigate('/');
    } else {
      navigate(`/products/search/${searchQuery}`);
    }
  };


  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    let quantity = 0;
    cartItems.forEach(item => {
      quantity += item.quantity;
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
            <form onSubmit={handleSearch} className="search-bar">
              <input 
                type="text" 
                placeholder="Search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} 
              />
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
          </form>
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
                <div onClick={handleAddToCart}>
                <img src={cartImg} alt="cartImg" className="cart-img" />
                  {sessionUser && totalQuantity > 0 && (
                <span className="cart-quantity">{totalQuantity}</span>
            )}
                </div>
            </div>
      </header>
      <SecondNavBar />
      {showModal && (
        <LoginModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default Navigation;
