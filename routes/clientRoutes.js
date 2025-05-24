const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// POST /api/leads/client - Create a new client
router.post('/', clientController.createClient);

module.exports = router; 