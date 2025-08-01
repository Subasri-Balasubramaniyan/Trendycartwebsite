**PROJECT TITLE **
    Trendy Cart - Full Stack E-Commerce App
**DESCRIPTION**
    Trendy Cart is a full-stack e-commerce platform featuring a Customer and Admin Portal with role-based authentication, product/order/customer management, custom branding, and a premium user interface.
**FEATURES**
    - JWT Authentication (Login/Register)
    - Role-Based Access Control (Admin vs Customer)
    - Product Filtering, Sorting, and Pagination
    - Admin CRUD for Products, Orders, Customers
    - Order Tracking & Impersonation Feature
    - Custom Branding System
**TECH STACK**
    Frontend: React.js, React Router, Axios, CSS  
    Backend: Node.js, Express.js, MongoDB, Mongoose  
    Auth: JWT, bcryptjs  
    Deployment: github
**FOLDER STRUCTURE**
trendy cart/
  ├── backend/
  │   ├── config/
  │   ├── controllers/
  │   ├── middleware/
  │   ├── models/
  │   ├── routes/
  │   └── server.js
  │
  ├── frontend/
  │   ├── src/
  │   │   ├── components/
  │   │   │   ├── admin/
  │   │   │   │   ├── components/
  │   │   │   │   └── pages/
  │   │   │   └── customer/
  │   │   │       ├── components/
  │   │   │       └── pages/
  │   │   ├── App.js
  │   │   └── index.js
  │
  ├── .gitignore
  ├── README.md
  └── package.json
**INSTALLATION INSTRUCTIONS**
  # Clone the repo
  git clone https://github.com/Subasri-Balasubramaniyan/Trendycartwebsite.git
  cd trendy-cart

  # Install backend dependencies
  cd backend
  npm install
  node server.js
  
  # Install frontend dependencies
  cd frontend
  npm install
  npm start
**ENVIRONMENT VARIABLES**
  # For Backend (.env)
  PORT=5000
  MONGO_URI=your_mongo_uri
  JWT_SECRET=your_jwt_secret
  
  # For Frontend (.env)
  REACT_APP_API_URL=http://localhost:3000/api
**CONTRIBUTIONS**
  Contributions are welcome! Please open an issue or submit a pull request.
**LICENSE**
  MIT License
**AUTHOR**
  Made with by Subasri Balasubramaniyan (https://github.com/Subasri-Balasubramaniyan)
**DEMO (click here 👇)**
  https://drive.google.com/file/d/1f6kSdI7MMQhp7wMjjXPY0dKjLlarTWFe/view?usp=sharing
  

