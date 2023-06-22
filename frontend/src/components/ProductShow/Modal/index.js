import React from 'react';
import { Link } from 'react-router-dom';
import './Modal.css';

const LoginModal = ({ onClose, modalType }) => {
  let modalContent = null;

  if (modalType === 'addToCart') {
    modalContent = (
      <>
        <h2>User must be logged in to add to or view cart</h2>
        <h5>
          Please <Link to="/login" onClick={onClose}>Log In</Link> or 
          <Link to="/signup" onClick={onClose}> Sign Up</Link> to continue.
        </h5>
      </>
    );
  } else if (modalType === 'writeReview') {
    modalContent = (
      <>
        <h2>User must be logged in to write a review</h2>
        <h5>
          Please <Link to="/login" onClick={onClose}>Log In</Link> or 
          <Link to="/signup" onClick={onClose}> Sign Up</Link> to write a review.
        </h5>
      </>
    );
  }

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={onClose}>X</button>
          {modalContent}
        </div>
      </div>
    </div>
  );
};


export default LoginModal;
