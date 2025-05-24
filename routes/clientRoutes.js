const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const validateClient = require("../middleware/validateClient");

// POST /api/leads/client - Create a new client
router.post('/', validateClient, clientController.createClient);

module.exports = router; 