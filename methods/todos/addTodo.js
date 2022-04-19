const Todo = require("../../models/todo");

module.exports = async function (req, res) {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false,
    });
    res.status(201).json({ todo });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Server error" });
  }
};
