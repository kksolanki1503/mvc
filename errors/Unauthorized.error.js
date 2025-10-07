const baseError = require("./Base.error");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedError extends baseError {
  constructor(details) {
    super(
      "Unauthorized",
      StatusCodes.UNAUTHORIZED,
      "Authentication is required or has failed.",
      details
    );
  }
}

module.exports = UnauthorizedError;
