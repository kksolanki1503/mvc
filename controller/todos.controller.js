const TodoServices = require("../services/todo.service");

const todoServices = new TodoServices();

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
exports.createTodo = (req, res) => {
  const { todoText } = req.body;
  todoServices.create(todoText);
  return res.json({
    msg: "created successfully",
    // result: result,
  });
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
