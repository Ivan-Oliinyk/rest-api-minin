const Todo = require("../../models/todo");

module.exports = async function (req, res) {
  const id = Number(req.params.id);

  try {
    const todo = await Todo.findByPk(id);
    todo.done = req.body.done;

    await todo.save();
    res.status(200).json({ todo });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};
