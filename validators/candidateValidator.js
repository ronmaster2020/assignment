const Joi = require("joi");

const candidateSchema = Joi.object({
  body: Joi.object({
    full_name: Joi.string().max(255).required(),
    email: Joi.string().email().max(255).required(),
    phone: Joi.string()
      .pattern(/^[0-9]{10}$/)
      .required(),
  }).required(),
  file: Joi.object({
    fieldname: Joi.string(),
    originalname: Joi.string(),
    encoding: Joi.string(),
    mimetype: Joi.string(),
    destination: Joi.string(),
    filename: Joi.string(),
    path: Joi.string().max(255).required(),
    size: Joi.number(),
  }).optional(),
});

module.exports = candidateSchema;
