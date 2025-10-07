const todoRepository = require("../repositories/todo.repository");

let todos = [];
class todoServices {
  getAll() {
    return todos;
  }
  getById(id) {
    return todos.filter((todo) => todo.id === id)[0];
  }
  async create(todoText) {
    todoText = todoText.toUpperCase();
    return await todoRepository.create(todoText);
    // todos.push({ id: todos.length, text: todoText });
  }
  delete(id) {
    todos.splice(id, 1);
  }
}

module.exports = new todoServices();
