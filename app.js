const express = require("express");
const path = require("path");
const routes = require("./routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Set EJS as view engine and define views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Parse form data and JSON using built-in Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Register routes
app.use(routes);

// 404 handler (must come after routes)
app.use(notFound);

// Centralized error handler
app.use(errorHandler);

module.exports = app;
