import React, { useEffect, useState } from "react";
import "./CustomerManagementPage.css";

const STORAGE_KEY = "trendycart_customers";

const CustomerManagementPage = () => {
  const [customers, setCustomers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState("add");
  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setCustomers(JSON.parse(stored));
    } else {
      const dummyCustomers = [
        {
          name: "Alice Johnson",
          email: "alice@example.com",
          phone: "123-456-7890",
          address: "123 Maple Street",
        },
        {
          name: "Bob Smith",
          email: "bob@example.com",
          phone: "987-654-3210",
          address: "456 Oak Avenue",
        },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dummyCustomers));
      setCustomers(dummyCustomers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(customers));
  }, [customers]);

  const openAddForm = () => {
    setFormType("add");
    setFormData({ name: "", email: "", phone: "", address: "" });
    setSelectedCustomerIndex(null);
    setShowForm(true);
  };

  const openEditForm = (index) => {
    const cust = customers[index];
    setFormType("edit");
    setFormData({
      name: cust.name,
      email: cust.email,
      phone: cust.phone,
      address: cust.address,
    });
    setSelectedCustomerIndex(index);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedCustomerIndex(null);
    setFormData({ name: "", email: "", phone: "", address: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "add") {
      setCustomers((prev) => [...prev, formData]);
    } else if (formType === "edit" && selectedCustomerIndex !== null) {
      setCustomers((prev) => {
        const newArr = [...prev];
        newArr[selectedCustomerIndex] = formData;
        return newArr;
      });
    }
    closeForm();
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      setCustomers((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="customer-management-container">
      <h2 className="page-title">Customer Management</h2>

      <button className="btn btn-add" onClick={openAddForm}>
        + Add New Customer
      </button>

      {customers.length === 0 ? (
        <p>No customers found.</p>
      ) : (
        <table className="customer-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cust, index) => (
              <tr key={index}>
                <td>{cust.name}</td>
                <td>{cust.email}</td>
                <td>{cust.phone}</td>
                <td>{cust.address}</td>
                <td>
                  <div className="action-buttons">
                    <button
                      className="btn btn-edit"
                      onClick={() => openEditForm(index)}
                      title="Edit Customer"
                      type="button"
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-delete"
                      onClick={() => handleDelete(index)}
                      title="Delete Customer"
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>{formType === "add" ? "Add New Customer" : "Edit Customer"}</h3>
            <form onSubmit={handleSubmit} className="customer-form">
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Phone
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </label>

              <label>
                Address
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </label>

              <div className="form-buttons">
                <button type="submit" className="btn btn-submit">
                  {formType === "add" ? "Add Customer" : "Save Changes"}
                </button>
                <button
                  type="button"
                  className="btn btn-cancel"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerManagementPage;
