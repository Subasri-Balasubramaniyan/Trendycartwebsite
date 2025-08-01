import express from 'express';
import {
  registerUser,
  loginUser,
} from '../controllers/authController.js';
import {
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// 🔐 Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// 👤 Protected Routes
router.get('/profile', authenticate, getUserProfile);
router.put('/profile', authenticate, updateUserProfile);

export default router;
