const baseError = require("./Base.error");
const { StatusCodes } = require("http-status-codes");

class InternalServerError extends baseError {
  constructor(details) {
    super(
      "Internal Server Error",
      StatusCodes.INTERNAL_SERVER_ERROR,
      "An unexpected error occurred",
      details
    );
  }
}

module.exports = InternalServerError;
