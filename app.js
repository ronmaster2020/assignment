const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Basic route
app.get('/', (req, res) => {
    res.render('index');
});

// Export the app instead of starting it
module.exports = app; 