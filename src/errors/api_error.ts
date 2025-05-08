class ApiError extends Error {
  httpStatusCode: number;
  reason: string;
  
  constructor(httpStatusCode: number, reason: string, message: string) {
    super(message);
    this.httpStatusCode = httpStatusCode;
    this.reason = reason;
  }
}

export default ApiError;

// function ApiError(httpStatusCode, reason, message) {
//   Error.call(this, message);
//   this.httpStatusCode = httpStatusCode;
//   this.reason = reason;
//   this.message = message;
// }

// ApiError.prototype = Object.create(Error.prototype);
// ApiError.prototype.constructor = ApiError;