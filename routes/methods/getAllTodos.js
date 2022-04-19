const Todo = require("../../models/todo");

module.exports = async function (req, res) {
  try {
    const todos = await Todo.findAll();
    res.status(200).json(todos);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};
