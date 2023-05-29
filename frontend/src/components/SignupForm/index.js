import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import logo from '../../imgs/canal-logo-white.png'



function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    if (sessionUser) {
      navigate('/');
    }
  }, [navigate, sessionUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, name, password }))
        .catch(async (res) => {
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signup-page-container">
      <div className="logo-link">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="signup-form-container">
        <h2 className="signup-form-title">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <ul className="signup-form-errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <div className="signup-form-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="signup-form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button className="signup-form-submit" type="submit">
            Continue
          </button>

            <div className="divider-line"></div>

          <div className="divider-break">
            <span className="divider-text">Already have an account? </span>
            <Link to="../SignupForm" className="signup-link">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;