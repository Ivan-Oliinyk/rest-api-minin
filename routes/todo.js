const { Router } = require("express");
const router = Router();

const getAllTodos = require("../methods/todos/getAllTodos");
const addTodo = require("../methods/todos/addTodo");
const updateTodo = require("../methods/todos/udateTodo");
const removeTodo = require("../methods/todos/removeTodo");

//get task list
router.get("/", getAllTodos);

//create new task
router.post("/", addTodo);

//change task
router.put("/:id", updateTodo);

//delete task
router.delete("/:id", removeTodo);

module.exports = router;
