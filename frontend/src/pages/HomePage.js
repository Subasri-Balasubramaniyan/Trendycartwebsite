import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './HomePage.css';
import logo from '../assets/logo.png';
import Footer from '../components/Footer'; // ✅ Import Footer

const HomePage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoggingIn(true);
    setError('');

    try {
      const { data } = await axios.post('/api/users/login', { email, password });
      localStorage.setItem('token', data.token);
      setShowPopup(true);
      setTimeout(() => navigate('/products'), 1500);
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <>
      <div className="login-page">
        <div className="login-container">
          <div className="login-banner">
            <img src="/images/banners/homepage1.jpg" alt="Homepage Banner" />
          </div>

          <div className="login-box">
            <img src={logo} alt="Trendy Cart Logo" className="login-logo" />
            <h2 className="login-title">Welcome to Trendy Cart</h2>

            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" disabled={loggingIn}>
                {loggingIn ? 'Logging in...' : 'Login'}
              </button>
              {error && <p className="error-text">{error}</p>}
            </form>

            <div className="login-links">
              <p>
                Don’t have an account?{' '}
                <span className="link-text" onClick={() => navigate('/signup')}>
                  Create Account
                </span>
              </p>
              <p>
                <span className="link-text" onClick={() => navigate('/forgot-password')}>
                  Forgot Password?
                </span>
              </p>
            </div>
          </div>
        </div>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-box">
              <p>Login Successful! Redirecting...</p>
            </div>
          </div>
        )}
      </div>

      {/* ✅ Footer Below Login Page */}
      <Footer />
    </>
  );
};

export default HomePage;
