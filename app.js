const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const routes = require("./routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// Enable CORS for all routes
app.use(cors());

// Parse form data and JSON using built-in Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// API routes
app.use("/api", routes);

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, "Vite-project/dist")));

// Catch-all: serve index.html for client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Vite-project/dist", "index.html"));
});

// 404 handler for API
app.use("/api", notFound);

// Centralized error handler
app.use(errorHandler);

module.exports = app;
