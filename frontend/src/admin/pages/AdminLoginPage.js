import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css';
import loginBanner from '../../assets/admin/login-banner.jpg';
import logo from '../../assets/logo.png'; // adjust path if needed

const AdminLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.admin-banner')?.classList.add('animate-banner');
      document.querySelector('.admin-login-form')?.classList.add('animate-form');
      document.querySelector('.admin-logo')?.classList.add('animate-logo');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === 'admin123') {
      localStorage.setItem('adminToken', 'demoToken');
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-banner">
        <img src={loginBanner} alt="Admin Banner" />
      </div>
      <div className="admin-login-form">
        <img src={logo} alt="Trendy Cart Logo" className="admin-logo" />
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
