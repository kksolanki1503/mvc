const express = require("express");
const { TodosController } = require("../../controller");
const { todoValidators } = require("../../validators");
const todoRouter = express.Router();

todoRouter.get("/getalltodos", TodosController.getAllTodos);
todoRouter.get("/gettodobyid", TodosController.getTodoById);
todoRouter.post(
  "/createtodo",
  todoValidators.createTodoValidator,
  TodosController.createTodo
);
todoRouter.delete("/deletetodo", TodosController.deleteTodo);
todoRouter.put("/updatetodo", TodosController.updateTodo);

module.exports = todoRouter;
