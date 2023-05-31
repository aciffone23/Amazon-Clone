import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import logo from '../../imgs/logoImgs/canal-logo-white.png'



function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", name: "", password: "", confirmPassword: ""});
  const navigate = useNavigate();


  useEffect(() => {
    if (sessionUser) {
      navigate('/');
    }
  }, [navigate, sessionUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ email: "", name: "", password: "", confirmPassword: ""});
    if (password === confirmPassword) {
      return dispatch(sessionActions.signup({ email, name, password }))
        .catch(async (res) => {
        console.log(res)
        let data;
        try {
            
          // .clone() essentially allows you to read the response body twice
        //   console.log(data?.errors)
          data = await res.clone().json();
        } catch {
            data = await res.text(); // Will hit this case if the server is down
            console.log(data)
        }
        if (data?.errors) {
            let newErrors = { email: "", name: "", password: "", confirmPassword: ""}
            console.log(data?.errors)
            data.errors.forEach((error) => {
                if (error.includes("Email"))  newErrors.email = error;
                else if (error.includes("name")) newErrors.name = error;
                else if (error.includes("Password")) newErrors.password = error;
                else if (error.includes("Confirm Password")) newErrors.confirmPassword = error;
            })
            setErrors(newErrors)
        } 
      });
    } else if (confirmPassword.length === 0) {
        setErrors(prev => ({ ...prev, confirmPassword:'Confirm Password can not be blank'}));
    } else {
        setErrors(prev => ({ ...prev, confirmPassword:'Confirm Password field must be the same as the Password field'}));
    }
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
        <form onSubmit={handleSubmit} autoComplete="off" noValidate>
          <div className="signup-form-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderColor: errors.email ? 'red' : '#ddd' }}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
          <div className="signup-form-field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{ borderColor: errors.name ? 'red' : '#ddd' }}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="signup-form-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderColor: errors.password ? 'red' : '#ddd' }}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="signup-form-field">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ borderColor: errors.confirmPassword ? 'red' : '#ddd' }}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>
          <button className="signup-form-submit" type="submit">
            Continue
          </button>

            <div className="divider-line-sign-up"></div>

          <div className="divider-break-sign-up">
            <span className="divider-text">Already have an account? </span>
            <Link to="/login" className="signup-link">Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupFormPage;