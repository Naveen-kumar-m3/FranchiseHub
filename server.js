const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// load environment variables
dotenv.config({ path: "./.env" });


// Database connection
const connectDB = require("./src/config/db");

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./src/routes/authRoutes");
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("FranchiseHub backend is running");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
