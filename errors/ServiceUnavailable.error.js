const baseError = require("./Base.error");
const { StatusCodes } = require("http-status-codes");

class ServiceUnavailableError extends baseError {
  constructor(details) {
    super(
      "Service Unavailable",
      StatusCodes.SERVICE_UNAVAILABLE,
      "The server is currently unable to handle the request due to temporary overloading or maintenance.",
      details
    );
  }
}

module.exports = ServiceUnavailableError;
