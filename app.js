const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const routes = require("./routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

// Parse form data and JSON using built-in Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the Vite build
app.use(express.static(path.join(__dirname, "Vite-project/dist")));

// API routes
app.use("/api", routes);

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "Vite-project/dist", "index.html"));
});

// 404 handler (must come after routes)
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

module.exports = app;
