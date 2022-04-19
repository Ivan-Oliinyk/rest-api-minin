const Todo = require("../models/todo");

const users = [
  { name: "Poly", age: 30, email: "some@gmail.com" },
  { name: "Doly", age: 21, email: "some@gmail.com" },
  { name: "Petro", age: 22, email: "some@gmail.com" },
];

module.exports = {
  test() {
    return {
      count: Math.trunc(Math.random() * 10),
      users,
    };
  },

  random({ min, max, count }) {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const random = Math.round(Math.random() * (max - min) + min);
      arr.push(random);
    }
    return arr;
  },

  addTestUser({ user: { name, email } }) {
    const user = { name, email, age: Math.ceil(Math.random() * 30) };
    users.push(user);

    return user;
  },

  async getTodos() {
    try {
      return await Todo.findAll();
    } catch (e) {
      throw new Error("Fetch todos is not avalible");
    }
  },
};