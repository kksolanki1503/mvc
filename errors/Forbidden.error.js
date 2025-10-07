const baseError = require("./Base.error");
const { StatusCodes } = require("http-status-codes");

class ForbiddenError extends baseError {
  constructor(details) {
    super(
      "Forbidden",
      StatusCodes.FORBIDDEN,
      "You do not have permission to access this resource.",
      details
    );
  }
}

module.exports = ForbiddenError;
