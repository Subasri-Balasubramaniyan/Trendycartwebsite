// models/Product.js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    required: true,
    enum: ['Men', 'Women', 'Kids'],
  },
  stock: { type: Number, default: 0 },
  images: [{ type: String }], // URLs or file paths
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const Product = mongoose.model('Product', productSchema);

export default Product;
