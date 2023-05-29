import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import logo from '../../imgs/canal-logo-white.png'
// import SignupFormPage from '../SignupForm';



function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionUser) {
      navigate('/');
    }
  }, [navigate, sessionUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
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

  return (
    <div className="login-page-container">
        <div className="logo-link">
        <Link to="/">
            <img src={logo} alt="Logo" className="logo-image" />
        </Link>
        </div>
        <div className="login-form-container">
            <h2 className="login-form-title">Sign In</h2>
            <form onSubmit={handleSubmit}>
            <ul className="login-form-errors">
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <div className="login-form-field">
                <label htmlFor="email">Email</label>
                <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
            <div className="login-form-field">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
            <button className="login-form-submit" type="submit">Continue</button>
            </form>
        </div>
        <div class="divider-break">
            <span class="divider-line"></span>
                <span>New to Canal?</span>
            <span class="divider-line"></span>
        </div>
        <div className="signup-button">
            <button onClick={() => navigate('../SignupForm')}>Create your Canal account</button>
        </div>
    </div>
  );
  
}

export default LoginFormPage;
