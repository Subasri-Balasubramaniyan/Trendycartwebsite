import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      _id: `ORD${Date.now()}`, // unique ID
      date: new Date().toISOString(),
      total: totalCost,
      status: "Processing",
      items: cart,
    };

    localStorage.setItem("orders", JSON.stringify([...existingOrders, newOrder]));

    // Optionally clear cart after order
    localStorage.removeItem("cart");
    setCart([]);

    alert("Order placed successfully!");

    navigate("/order-confirmation");
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Your Checkout Cart is Empty 🛒</h2>
        <button onClick={() => navigate("/")}>Go Back to Shopping</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h2>🧾 Checkout</h2>
      <div className="checkout-items">
        {cart.map((item) => (
          <div key={item._id} className="checkout-item">
            <span>{item.name}</span>
            <span>Qty: {item.quantity}</span>
            <span>₹{(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <h3>Total Payable: ₹{totalCost.toFixed(2)}</h3>
      <button className="place-order-btn" onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
};

export default CheckoutPage;
