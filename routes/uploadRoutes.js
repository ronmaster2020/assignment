const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

// GET /upload - Show upload form
router.get('/upload', uploadController.showUploadForm);

// POST /upload - Handle file upload
router.post('/upload', 
    uploadController.uploadFile,  // Multer middleware
    uploadController.processUpload  // Process the upload
);

module.exports = router; 