function ApiError(httpStatusCode, reason, message) {
  Error.call(this, message);
  this.httpStatusCode = httpStatusCode;
  this.reason = reason;
  this.message = message;
}

ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;

module.exports = ApiError;