import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddOrderPage.css";

const AddOrderPage = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    customerName: "",
    items: "",
    total: "",
    status: "Processing",
  });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      ...order,
      _id: Date.now().toString(),
      total: parseFloat(order.total),
      items: order.items.split(",").map((item) => item.trim()),
    };
    storedOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(storedOrders));
    alert("✅ Order added!");
    navigate("/admin/orders");
  };

  return (
    <div className="add-order-container">
      <h2>Add New Order</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={order.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="items"
          placeholder="Items (comma-separated)"
          value={order.items}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="total"
          placeholder="Total Amount"
          value={order.total}
          onChange={handleChange}
          required
        />
        <select name="status" value={order.status} onChange={handleChange}>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
        <button type="submit">➕ Add Order</button>
      </form>
    </div>
  );
};

export default AddOrderPage;
