const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || res.statusCode || 500;

  if (!err.isOperational) {
    // Unhandled or programming error
    console.error("🚨 Unexpected Error:", err);
  }

  res.status(statusCode).json({
    message: err.message || "Internal Server Error",
    details: err.details || null,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = errorHandler;
