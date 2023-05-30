const router = require("express").Router();
const Task = require("../models/Task");

// routes
router.get("/", (req, res) => {
  Task.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.error("Error fetching tasks:", err);
      res.status(500).json({ error: "Failed to fetch tasks" });
    });
});

router.post("/add/task", (req, res) => {
  const { task } = req.body;
  const newTask = new Task({ task });

  // save task
  newTask
    .save()
    .then(() => {
      console.log("Success!");

      // Fetch all tasks and send the updated task list back to the client
      Task.find()
        .then((tasks) => {
          res.json(tasks);
        })
        .catch((err) => {
          console.error("Error fetching tasks:", err);
          res.status(500).json({ error: "Failed to fetch tasks" });
        });
    })
    .catch((err) => {
      console.error("Error saving task:", err);
      res.status(500).json({ error: "Failed to save task" });
    });
});

router.delete("/delete/task/:id", (req, res) => {
  const { id } = req.params;
  Task.findByIdAndRemove(id)
    .then(() => {
      console.log("Task deleted successfully!");

      // Fetch all tasks and send the updated task list back to the client
      Task.find()
        .then((tasks) => {
          res.json(tasks);
        })
        .catch((err) => {
          console.error("Error fetching tasks:", err);
          res.status(500).json({ error: "Failed to fetch tasks" });
        });
    })
    .catch((err) => {
      console.error("Error deleting task:", err);
      res.status(500).json({ error: "Failed to delete task" });
    });
});


module.exports = router;
