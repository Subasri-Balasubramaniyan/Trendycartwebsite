// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaUserCircle,
} from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="brand">Trendy Cart</div>
      <ul className="nav-links">
        <li><Link to="/"><FaHome /> Home</Link></li>
        <li><Link to="/profile"><FaUserCircle /> Profile</Link></li>
        <li><Link to="/about"><FaInfoCircle /> About</Link></li>
        <li><Link to="/contact"><FaPhone /> Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
