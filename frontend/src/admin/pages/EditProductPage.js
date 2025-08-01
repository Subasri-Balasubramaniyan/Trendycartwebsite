import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './AddProductPage.css';

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    image: '',
  });

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const selected = storedProducts.find((p) => p._id === id);
    if (selected) {
      setProduct(selected);
    }
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = storedProducts.map((p) =>
      p._id === id ? product : p
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    alert("✅ Product updated successfully!");
    navigate("/admin/products");
  };

  return (
    <div className="add-product-container">
      <div className="add-product-box">
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
          <input type="number" name="price" placeholder="Price (₹)" value={product.price} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} rows="4" required />
          <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} required />
          <input type="number" name="stock" placeholder="Stock Quantity" value={product.stock} onChange={handleChange} required />
          <input type="text" name="image" placeholder="Image URL" value={product.image} onChange={handleChange} />
          <button type="submit" className="submit-btn">💾 Update Product</button>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;
