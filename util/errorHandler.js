// import { StatusCodes } from "http-status-codes";
// import BaseError from "../errors/Base.error";
const { StatusCodes } = require("http-status-codes");
const BaseError = require("../errors/Base.error");
// import BaseError from "../errors/Base.error";
// import { BaseError } from "../errors/baseError.js";

exports.errorHandler = (err, req, res, next) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).json({
      success: false,
      mssage: err.message,
      error: err.details,
      data: {},
    });
  }

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    mssage: "Something went wrong",
    error: err.message,
    data: {},
  });
};
