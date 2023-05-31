import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import logo from '../../imgs/canal-logo-white.png'


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

  const handleSubmit = (e, isDemoUser = false) => {
    e.preventDefault();
    setErrors([]);

    let credentials;
    if (isDemoUser) {
      credentials = { email: 'demouser@gmail.com', password: 'password' }
    } else {
      credentials = { email, password }
    }

    return dispatch(sessionActions.login(credentials))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text(); 
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
            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
            <div className="login-form-field">
                <label htmlFor="email">Email</label>
                <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderColor: errors.length > 0 ? 'red' : '#ddd' }}
                />
                {errors.map(error => <p className="error" key={error}>{error}</p>)}
            </div>
            <div className="login-form-field">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ borderColor: errors.length > 0 ? 'red' : '#ddd' }}
                />
            </div>
            <button className="login-form-submit" type="submit">Continue</button>
            <button className="login-form-demo" onClick={(e) => handleSubmit(e, true)}>Log In as Demo User</button>
            </form>
        </div>
        <div className="divider-break">
            <span className="divider-line"></span>
                <span>New to Canal?</span>
            <span className="divider-line"></span>
        </div>
        <div className="signup-button">
            <button onClick={() => navigate('/signup')}>Create your Canal account</button>
        </div>
    </div>
  );
  
}

export default LoginFormPage;
