let todos = [];
class todoServices {
  getAll() {
    return todos;
  }
  getById(id) {
    return todos.filter((todo) => todo.id === id)[0];
  }
  create(todoText) {
    todos.push({ id: todos.length, text: todoText });
  }
  delete(id) {
    todos.splice(id, 1);
  }
}

module.exports = todoServices;
