const { Router } = require("express");
const router = Router();

const getAllTodos = require("./methods/getAllTodos");
const addTodo = require("./methods/addTodo");
const updateTodo = require("./methods/udateTodo");
const removeTodo = require("./methods/removeTodo");

//get task list
router.get("/", getAllTodos);

//create new task
router.post("/", addTodo);

//change task
router.put("/:id", updateTodo);

//delete task
router.delete("/:id", removeTodo);

module.exports = router;
