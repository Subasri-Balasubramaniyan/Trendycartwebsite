// controllers/adminController.js

export const getDashboardStats = async (req, res) => {
  try {
    // Dummy hardcoded values (static display)
    const stats = {
      totalProducts: 120,
      totalCustomers: 20,
      totalOrders: 15,
      deliveredOrders: 0,
      shippedOrders: 0,
      processingOrders: 4,
    };

    res.json(stats);
  } catch (err) {
    console.error("Error in getDashboardStats:", err);
    res.status(500).json({ message: 'Error fetching dashboard stats' });
  }
};
