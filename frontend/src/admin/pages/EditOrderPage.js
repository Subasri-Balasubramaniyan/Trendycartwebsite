import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditOrderPage.css";

const EditOrderPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const existingOrder = storedOrders.find((o) => o._id === id);
    if (existingOrder) {
      setOrder({ ...existingOrder, items: existingOrder.items.join(", ") });
    }
  }, [id]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedOrder = {
      ...order,
      items: order.items.split(",").map((item) => item.trim()),
    };
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = storedOrders.map((o) =>
      o._id === id ? updatedOrder : o
    );
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    alert("✅ Order updated!");
    navigate("/admin/orders");
  };

  if (!order) return <div>Loading...</div>;

  return (
    <div className="edit-order-container">
      <h2>Edit Order</h2>
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
        <button type="submit">💾 Update Order</button>
      </form>
    </div>
  );
};

export default EditOrderPage;
