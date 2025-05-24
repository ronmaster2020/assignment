const ApiError = require('./ApiError');

/**
 * Wraps an async controller method with error handling
 * @param {Function} fn - The controller method to wrap
 * @param {string} [customErrorMessage] - Custom error message for non-ApiError errors
 * @returns {Function} - Wrapped controller method
 */
const asyncHandler = (fn, customErrorMessage = 'Internal server error') => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => {
            if (error instanceof ApiError) {
                // If it's an ApiError, pass it as is
                next(error);
            } else {
                // Check if error already has a message
                const errorMessage = error.message || customErrorMessage;
                next(new ApiError(500, errorMessage, error));
            }
        });
    };
};

module.exports = asyncHandler;