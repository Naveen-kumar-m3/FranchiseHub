# FranchiseHub – Backend

FranchiseHub is a backend service for a **social commerce platform built for franchise-based businesses**.  
It enables franchise sellers to create accounts, authenticate securely, and lays the foundation for features like franchise profiles, social posts, and location-based discovery.

This repository currently focuses on the **backend architecture and authentication system**, built using Node.js and Express.

---

## 🚀 Features Implemented

- User authentication (Signup & Login)
- Role-based users (Buyer / Seller)
- Secure password hashing using bcrypt
- JWT-based authentication
- MongoDB integration using Mongoose
- Clean and scalable backend folder structure

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **JWT (JSON Web Tokens)**
- **bcryptjs**
- **dotenv**
- **nodemon**

---

## 📂 Project Structure

Backend/
├── server.js
├── package.json
├── .env
├── src/
│ ├── config/
│ │ └── db.js
│ ├── models/
│ │ └── User.js
│ ├── controllers/
│ │ └── authController.js
│ ├── routes/
│ │ └── authRoutes.js
│ ├── middleware/
│ │ ├── authMiddleware.js
│ │ └── roleMiddleware.js
│ └── utils/