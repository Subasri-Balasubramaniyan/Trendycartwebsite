// src/admin/components/AdminNavbar.js
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaCog,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="admin-navbar">
      <div className="navbar-left">
        <span className="admin-title">Trendy Cart Admin Portal</span>
      </div>
      <div className="menu-icon-wrapper">
        <button className="menu-toggle-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />} {/* ☰ becomes X */}
        </button>
        {isMenuOpen && (
          <div className="dropdown-menu">
            <Link to="/admin" onClick={closeMenu}>
              <FaTachometerAlt className="icon" /> Dashboard
            </Link>
            <Link to="/admin/products" onClick={closeMenu}>
              <FaBoxOpen className="icon" /> Products
            </Link>
            <Link to="/admin/orders" onClick={closeMenu}>
              <FaShoppingCart className="icon" /> Orders
            </Link>
            <Link to="/admin/customers" onClick={closeMenu}>
              <FaUsers className="icon" /> Customers
            </Link>
            <Link to="/admin/settings" onClick={closeMenu}>
              <FaCog className="icon" /> Settings
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminNavbar;
