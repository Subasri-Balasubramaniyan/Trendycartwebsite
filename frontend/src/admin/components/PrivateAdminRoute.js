// src/admin/components/PrivateAdminRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateAdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  if (!user || user.role !== "admin" || !token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateAdminRoute;
