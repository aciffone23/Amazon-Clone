import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css'

const LoginModal = ({ onClose }) => {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>X</button>
            <h2>User must be logged in to add to cart</h2>
            <h5>Please <Link to="/login" onClick={onClose}>Log In</Link> or 
                    <Link to="/signup" onClick={onClose}> Sign Up</Link> to continue.</h5>
          </div>
        </div>
      </div>
    );
  };

export default LoginModal;