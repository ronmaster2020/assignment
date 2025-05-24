const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const validate = require('../middleware/validate');
const clientSchema = require('../validators/clientValidator');

// POST /api/leads/client - Create a new client
router.post('/', validate(clientSchema), clientController.createClient);

module.exports = router; 