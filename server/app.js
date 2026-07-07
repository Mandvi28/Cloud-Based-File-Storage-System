/*const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running...");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

module.exports = app;*/








/*const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running...");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// File Upload Routes
app.use("/api/files", fileRoutes);

module.exports = app;*/






/*const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

console.log("authRoutes:", authRoutes);
console.log("fileRoutes:", fileRoutes);

app.get("/", (req, res) => {
  res.send("Server Running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/files", fileRoutes);

console.log("✅ Routes registered successfully");





module.exports = app;*/



const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const fileRoutes = require("./routes/fileRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server Running...");
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// File Upload Routes
app.use("/api/files", fileRoutes);

module.exports = app;







