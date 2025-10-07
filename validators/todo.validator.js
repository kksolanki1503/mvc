const BadRequestError = require("../errors/BadRequest.error");

exports.createTodoValidator = (req, res, next) => {
  if (!req?.body?.todoText) {
    throw new BadRequestError({ missing: "Todo text is required" });
  }
  next();
};
