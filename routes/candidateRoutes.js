const express = require('express');
const router = express.Router();
const candidateController = require('../controllers/candidateController');
const upload = require('../config/multer');
const validate = require('../middleware/validate');
const candidateSchema = require('../validators/candidateValidator');

// POST /api/leads/candidate - Create a new job candidate
router.post('/', 
    upload.single('resume'), // Handle file upload
    validate(candidateSchema), 
    candidateController.createCandidate
);

module.exports = router; 