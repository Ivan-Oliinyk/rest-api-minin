const { Router } = require("express");
const router = Router();

//get task list
router.get("/", (req, res) => {
  res.json({ a: "helllow" });
});

//create new task
router.post("/", async (req, res) => {});

//change task
router.put("/:id", async (req, res) => {});

//delete task
router.delete("/:id", async (req, res) => {});

module.exports = router;
