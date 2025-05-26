const Joi = require("joi");

const clientSchema = Joi.object({
  body: Joi.object({
    full_name: Joi.string().max(255).required(),
    email: Joi.string().email().max(255).required(),
    phone: Joi.string().max(50).required(),
    short_description: Joi.string().max(1000).required(),
    company_name: Joi.string().max(255).optional().allow(""),
  }).required(),
});

module.exports = clientSchema;
