const Todo = require("../models/todo");

module.exports = {
  async getTodos() {
    try {
      return await Todo.findAll();
    } catch (e) {
      throw new Error("Fetch todos is not avalible");
    }
  },

  async createTodo({ todo }) {
    try {
      return await Todo.create({
        title: todo.title,
        done: false,
      });
    } catch (e) {
      throw new Error("some eror with created");
    }
  },

  async compliteTodo({ id }) {
    console.log("id ===", id);

    try {
      const todo = await Todo.findByPk(Number(id));
      todo.done = true;

      await todo.save();

      return todo;
    } catch (e) {
      throw new Error("id is required !");
    }
  },
};
