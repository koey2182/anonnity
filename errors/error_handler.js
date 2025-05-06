const ApiError = require("./api_error");

function errorHandler(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.httpStatusCode).json({
      reason: err.reason,
      message: err.message
    });
  }
  else {
    res.status(500).json({
      reason: err.constructor.name,
      message: err.message
    });
  }
}

module.exports = errorHandler;