const upload = require('../config/multer');
const pool = require('../config/db'); // TODO: change the upload path to the db
const ApiError = require('../utils/ApiError');
const asyncHandler = require('../utils/asyncHandler');

// Controller methods
const uploadController = {
    // Show upload form
    showUploadForm: (req, res) => {
        res.render('test-upload'); // TODO: change the view to the actual upload form
    },

    // Handle file upload
    uploadFile: upload.single('resume'),
    
    // Process the uploaded file
    processUpload: asyncHandler(async (req, res) => {
        if (!req.file) {
            throw new ApiError(400, 'No file uploaded');
        }
        res.send(`File uploaded: ${req.file.filename}`);
    }, 'Error uploading file')
};

module.exports = uploadController; 