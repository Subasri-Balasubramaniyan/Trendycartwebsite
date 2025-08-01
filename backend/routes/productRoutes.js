import express from 'express';
import {
  getAllProducts,
  getProductById,
  addProduct, // ✅ new controller
} from '../controllers/productController.js';

import authenticate from '../middleware/authenticate.js'; // ✅ auth

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

// ✅ POST route to add product (admin only)
router.post('/', authenticate, addProduct);

export default router;
