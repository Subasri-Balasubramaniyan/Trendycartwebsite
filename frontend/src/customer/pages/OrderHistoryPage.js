import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OrderHistoryPage.css";

const OrderHistoryPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    if (storedOrders.length > 0) {
      setOrders(storedOrders);
    } else {
      const fakeOrders = [
        {
          _id: "ORD123456",
          date: "2025-07-27T12:00:00Z",
          total: 1299,
          status: "Delivered",
        },
        {
          _id: "ORD123457",
          date: "2025-07-20T15:30:00Z",
          total: 999,
          status: "Shipped",
        },
        {
          _id: "ORD123458",
          date: "2025-07-29T09:00:00Z",
          total: 450,
          status: "Ordered",
        },
      ];
      setOrders(fakeOrders);
      localStorage.setItem("orders", JSON.stringify(fakeOrders));
    }
  }, []);

  const formatDate = (dateString) => {
    const parsed = new Date(dateString);
    const date = isNaN(parsed) ? new Date() : parsed;

    return date.toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "ordered":
        return "status ordered";
      case "shipped":
        return "status shipped";
      case "delivered":
        return "status delivered";
      default:
        return "status";
    }
  };

  const handleTrackOrder = (orderId) => {
    navigate(`/track-order/${orderId}`);
  };

  return (
    <div className="order-history">
      <h2>Your Order History</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Date</th>
              <th>Total (₹)</th>
              <th>Status</th>
              <th>Track</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{formatDate(order.date)}</td>
                <td>{order.total.toFixed(2)}</td>
                <td className={getStatusClass(order.status)}>{order.status}</td>
                <td>
                  <button
                    className="track-btn"
                    onClick={() => handleTrackOrder(order._id)}
                  >
                    Track Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderHistoryPage;
