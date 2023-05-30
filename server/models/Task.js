const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = new mongoose.model("Task", taskSchema);
