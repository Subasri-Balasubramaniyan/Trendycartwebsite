import React from "react";
import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaCog,
  FaShippingFast,
  FaCheckCircle,
  FaSpinner
} from "react-icons/fa";
import "./AdminDashboardPage.css";

const AdminDashboardPage = () => {
  const dummyStats = {
    totalProducts: 180,
    totalCustomers: 40,
    totalOrders: 16,
    deliveredOrders: 8,
    shippedOrders: 5,
    processingOrders: 3,
  };

  return (
    <div className="admin-dashboard">
      <h2 className="admin-dashboard-title">Welcome, Admin!</h2>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card">
          <FaBoxOpen className="stat-icon" />
          <div>
            <h3>{dummyStats.totalProducts}</h3>
            <p>Total Products</p>
          </div>
        </div>

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <div>
            <h3>{dummyStats.totalCustomers}</h3>
            <p>Total Customers</p>
          </div>
        </div>

        <div className="stat-card">
          <FaShoppingCart className="stat-icon" />
          <div>
            <h3>{dummyStats.totalOrders}</h3>
            <p>Total Orders</p>
          </div>
        </div>

        <div className="stat-card">
          <FaCheckCircle className="stat-icon green" />
          <div>
            <h3>{dummyStats.deliveredOrders}</h3>
            <p>Delivered</p>
          </div>
        </div>

        <div className="stat-card">
          <FaShippingFast className="stat-icon blue" />
          <div>
            <h3>{dummyStats.shippedOrders}</h3>
            <p>Shipped</p>
          </div>
        </div>

        <div className="stat-card">
          <FaSpinner className="stat-icon gray" />
          <div>
            <h3>{dummyStats.processingOrders}</h3>
            <p>Processing</p>
          </div>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="manage-section">
        <h3>Manage</h3>
        <div className="manage-grid">
          <Link to="/admin/products" className="manage-card">
            <FaBoxOpen className="manage-icon" />
            <p>Products</p>
          </Link>

          <Link to="/admin/orders" className="manage-card">
            <FaShoppingCart className="manage-icon" />
            <p>Orders</p>
          </Link>

          <Link to="/admin/customers" className="manage-card">
            <FaUsers className="manage-icon" />
            <p>Customers</p>
          </Link>

          <Link to="/admin/settings" className="manage-card">
            <FaCog className="manage-icon" />
            <p>Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
