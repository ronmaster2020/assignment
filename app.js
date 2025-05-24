const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const errorHandler = require('./middleware/errorHandler');

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse application/json
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
    res.render('index');
});

// 404 middleware
app.use((req, res, next) => {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error); // pass to error handler
});

// Error handler
app.use(errorHandler);
// Export the app instead of starting it
module.exports = app; 