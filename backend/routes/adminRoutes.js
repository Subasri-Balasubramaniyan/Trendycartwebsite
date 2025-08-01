const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const settingController = require('../controllers/settingController');
const { authenticate, isAdmin } = require('../middleware/authMiddleware');
const brandingRoutes = require('./admin/brandingRoutes'); // ✅ fixed import
const dashboardRoutes = require('./dashboardRoutes'); // ✅ add this if not already
import { getAdminDashboardStats } from '../controllers/adminController.js';

// Admin: Get all users
router.get('/users', authenticate, isAdmin, adminController.getAllUsers);

// Admin: Reset customer password
router.put('/users/:userId/reset-password', authenticate, isAdmin, adminController.resetCustomerPassword);

// Admin: Impersonate customer (generate customer JWT token)
router.post('/impersonate/:userId', authenticate, isAdmin, adminController.impersonateUser);

// Admin: Get and update branding settings (logo, colors, font)
router
  .route('/settings')
  .get(authenticate, isAdmin, settingController.getSettings)
  .put(authenticate, isAdmin, settingController.updateSettings);

// Mount branding and dashboard routes
router.use('/branding', brandingRoutes);
router.use('/dashboard', dashboardRoutes); // GET /api/admin/dashboard/stats
router.get('/dashboard', authenticate, authorizeAdmin, getAdminDashboardStats);

module.exports = router;
