const express = require("express");
const { TodosController } = require("../../controller");
const todoRouter = express.Router();

todoRouter.get("/getalltodos", TodosController.getAllTodos);
todoRouter.get("/gettodobyid", TodosController.getTodoById);
todoRouter.post("/createtodo", TodosController.createTodo);
todoRouter.delete("/deletetodo", TodosController.deleteTodo);
todoRouter.put("/updatetodo", TodosController.updateTodo);

module.exports = todoRouter;
