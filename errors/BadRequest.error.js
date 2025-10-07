const baseError = require("./Base.error");
const { StatusCodes } = require("http-status-codes");
class BadRequestError extends baseError {
  constructor(details) {
    super(
      "Bad Request",
      StatusCodes.BAD_REQUEST,
      "'The request could not be understood or was missing required parameters'",
      details
    );
  }
}

module.exports = BadRequestError;
