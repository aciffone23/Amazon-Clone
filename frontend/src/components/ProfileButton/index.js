import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from 'react-router-dom';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <div className="profile-button" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
      {user ? (
        <>
          <span>Hello, {user.name}</span>
          <i className="fa-solid fa-caret-down" />
          {isMenuOpen && (
            <div className="dropdown-menu">
              <div className="dropdown-content">
                <div className="user-info">
                  <span>{user.name}</span>
                  <span>{user.email}</span>
                </div>
                <div className="logout-button">
                  <button onClick={logout}>Log Out</button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <span>Hello, Sign in</span>
          <i className="fa-solid fa-caret-down" />
          {isMenuOpen && (
            <div className="dropdown-menu">
              {/* <div className="dropdown-content"> */}
                <div className="sign-in-container">
                  <Link to="/login" className="sign-in-button-dropdown">
                    Sign In
                  </Link>
                </div>
                <div className="new-customer-container">
                  <span>New customer?</span>
                  <Link to="/signup" className="register-link">
                    Start Here.
                  </Link>
                </div>
              {/* </div> */}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProfileButton;


