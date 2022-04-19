const Todo = require("../../models/todo");

module.exports = async function (req, res) {
  try {
    const id = Number(req.params.id);
    const todos = await Todo.findAll({
      where: {
        id: id,
      },
    });

    await todos[0].destroy();

    res.status(204).json({});
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};
