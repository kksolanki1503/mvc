const todoServices = require("../services/todo.service");

exports.getAllTodos = (req, res) => {
  const result = todoServices.getAll();
  // console.log(result, "result");
  return res.json({
    msg: "success",
    result: result,
  });
};
exports.getTodoById = (req, res) => {
  let { id } = req.query;
  id = parseInt(id);
  const result = todoServices.getById(id);
  // const result = [];
  return res.json({
    msg: "success",
    result: result || [],
  });
};
exports.createTodo = async (req, res, next) => {
  const { todoText } = req.body;
  const result = await todoServices.create(todoText);
  try {
    return res.json({
      msg: "created successfully",
      result: result,
    });
  } catch (error) {
    next(error);
  }
};
exports.deleteTodo = (req, res) => {
  const { id } = req.body;
  todoServices.delete(id);
  return res.json({
    msg: "deleted SuccessFully",
    // result: result,f
  });
};
exports.updateTodo = (req, res) => {
  return res.json({
    msg: "updatedSuccessFully",
    // result: result,
  });
};
