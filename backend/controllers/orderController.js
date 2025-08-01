import { Order } from "../models/Order.js";

export const placeOrder = async (req, res) => {
  try {
    const { name, shippingAddress, contactNumber } = req.body;

    if (!name || !shippingAddress || !contactNumber) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new Order({
      name,
      shippingAddress,
      contactNumber,
    });

    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
