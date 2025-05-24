const { Pool } = require('pg');

// Setup connection pool
const pool = new Pool({
  user: 'ron',
  host: 'localhost',
  database: 'assignment',
  port: 5432,
});

module.exports = pool;