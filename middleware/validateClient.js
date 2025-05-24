// validators/validateClient.js
const ApiError = require('../utils/ApiError');

const fieldRules = {
  full_name: { required: true, max: 255 },
  email: { required: true, max: 255 },
  phone: { required: true, max: 50 },
  short_description: { required: true, max: 1000 },
  company_name: { required: false, max: 255 }
};

const validateClient = (req, res, next) => {
  for (const [field, rules] of Object.entries(fieldRules)) {
    const value = req.body[field];

    if (rules.required) {
        if (typeof value !== 'string' || value.trim() === '') {
            return next(new ApiError(400, `${field} is required and must be a non-empty string`));
        }
    }
  
    if (value !== undefined && value !== null) {
        if (typeof value !== 'string') {
            return next(new ApiError(400, `${field} must be a string`));
        }
  
        if (value.length > rules.max) {
            return next(new ApiError(400, `${field} must be at most ${rules.max} characters`));
        }
    }
  }

  next();
};

module.exports = validateClient;