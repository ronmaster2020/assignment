const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');
const routes = require("./routes");
const ApiError = require('./utils/ApiError');

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true })); // Parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // Parse application/json

// Use routes
app.use(routes);

// 404 middleware
app.use((req, res, next) => {
    const error = new ApiError(404, `Not Found - ${req.originalUrl}`);
    next(error); // pass to error handler
});

// Error handler
app.use(errorHandler);
// Export the app instead of starting it
module.exports = app; 