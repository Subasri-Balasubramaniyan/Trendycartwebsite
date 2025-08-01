import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import "./ProductManagementPage.css";

const ProductManagementPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter((product) => product._id !== id);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      alert("Product deleted successfully!");
    }
  };

  const handleEdit = (id) => {
    const updatedName = prompt("Enter new product name:");
    if (updatedName) {
      const updatedProducts = products.map((product) =>
        product._id === id ? { ...product, name: updatedName } : product
      );
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      alert("Product updated!");
    }
  };

  return (
    <div className="product-management-container">
      <div className="header-row">
        <h2>Product Management</h2>
        <button
          className="add-product-button"
          onClick={() => navigate("/admin/products/add")}
        >
          <FaPlus className="icon" />
          Add Product
        </button>
      </div>

      <table className="product-management-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="action-button edit"
                      onClick={() => handleEdit(product._id)}
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      className="action-button delete"
                      onClick={() => handleDelete(product._id)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No products found. Add some!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementPage;
