const { Router } = require("express");
const Todo = require("../models/todo");
const router = Router();

//get task list
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();

    console.log("todos ===>", todos);

    res.status(200).json(todos);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

//create new task
router.post("/", async (req, res) => {
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
});

//change task
router.put("/:id", async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

//delete task
router.delete("/:id", async (req, res) => {
  try {
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
