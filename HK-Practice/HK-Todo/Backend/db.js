const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://farhan:VIHFbgG9uWf4MDQS@cluster0.eexit2s.mongodb.net/todo-app"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
