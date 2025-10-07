const BaseError = require("./Base.error");
const { StatusCodes } = require("http-status-codes");
class NotFoundError extends BaseError {
  constructor(details) {
    super(
      "Not Found",
      StatusCodes.NOT_FOUND,
      "The requested resource was not found",
      details
    );
  }
}

module.exports = NotFoundError;
