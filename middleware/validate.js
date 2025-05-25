const ApiError = require("../utils/ApiError");

const validate = (schema) => {
  return (req, res, next) => {
    const validationObject = {
      body: req.body,
      ...(req.file && { file: req.file }),
    };

    const { error } = schema.validate(validationObject, { abortEarly: false });

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      return next(new ApiError(400, errorMessage));
    }

    next();
  };
};

module.exports = validate;
