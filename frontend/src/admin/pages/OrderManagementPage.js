import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderManagementPage.css";

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    if (existingOrders.length === 0) {
      const fakeOrders = Array.from({ length: 100 }).map((_, i) => ({
        _id: `${Date.now()}-${i}`,
        customerName: `Customer ${i + 1}`,
        items: [`Item ${i + 1}`, `Item ${i + 2}`],
        total: Math.floor(Math.random() * 5000) + 100,
        status: ["Processing", "Shipped", "Delivered"][i % 3],
      }));
      localStorage.setItem("orders", JSON.stringify(fakeOrders));
      setOrders(fakeOrders);
    } else {
      setOrders(existingOrders);
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      const updatedOrders = orders.filter((order) => order._id !== id);
      localStorage.setItem("orders", JSON.stringify(updatedOrders));
      setOrders(updatedOrders);
      alert("✅ Order deleted!");
    }
  };

  return (
    <div className="order-management-container">
      <h2>Order Management</h2>

      <Link to="/admin/orders/add" className="add-order-button">
        ➕ Add New Order
      </Link>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Items</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(({ _id, customerName, items, total, status }) => (
              <tr key={_id}>
                <td>{customerName}</td>
                <td>{items.join(", ")}</td>
                <td>₹{total.toFixed(2)}</td>
                <td>{status}</td>
                <td>
                  <Link to={`/admin/orders/edit/${_id}`} className="edit-btn">
                    ✏️ Edit
                  </Link>{" "}
                  <button
                    onClick={() => handleDelete(_id)}
                    className="delete-btn"
                  >
                    🗑️ Delete
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

export default OrderManagementPage;
