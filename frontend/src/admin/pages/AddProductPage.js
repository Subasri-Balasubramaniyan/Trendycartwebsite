// AddProductPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';
import './AddProductPage.css';

const AddProductPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    image: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];

    const newProduct = {
      ...product,
      _id: Date.now().toString(), // generate unique ID
      price: parseFloat(product.price),
      stock: parseInt(product.stock),
    };

    storedProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(storedProducts));

    alert('✅ Product added successfully!');
    navigate('/admin/products');
  };

  return (
    <div className="add-product-container">
      <div className="add-product-box">
        <h2><FaPlusCircle style={{ marginRight: '8px' }} />Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Price (₹)" value={product.price} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} rows="4" required />
          <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
          <input type="number" name="stock" placeholder="Stock Quantity" value={product.stock} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} />
          <button type="submit" className="submit-btn">➕ Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
