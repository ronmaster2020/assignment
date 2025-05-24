const express = require('express');
const path = require('path');
const app = express();
const errorHandler = require('./middleware/errorHandler');

// Serve static files from the 'public' directory
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// Basic route
app.get('/', (req, res) => {
    res.render('index');
});

const pool = require('./config/db');

app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

app.use((req, res, next) => {
    res.status(404);
    const error = new Error(`Not Found - ${req.originalUrl}`);
    next(error); // pass to error handler
});

app.use(errorHandler);
// Export the app instead of starting it
module.exports = app; 