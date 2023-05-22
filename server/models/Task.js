const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    required: true
  }
}); //turns schema into a model named Task. taskSchema passed into second argument of model method. Empowers schema to manipulate database.

const Task = mongoose.model("Task", taskSchema);

module.exports = Task; //exports Task out --> becomes JS module that can be called in another file using a require
