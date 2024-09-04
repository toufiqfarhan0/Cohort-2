const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// inputs = body{title, description = "string"}
// creating the todos
app.post("/todo", async (req, res) => {
  const createPlayLoad = req.body;
  const parsedPlayLoad = createTodo.safeParse(createPlayLoad);
  if (!parsedPlayLoad.success) {
    res.status(411).json({
      message: "You sent worng inputs",
    });
    return;
  }
  //put in the mongodb

  await todo.create({
    title: createPlayLoad.title,
    description: createPlayLoad.description,
    completed: false,
  });

  res.json({
    message: "Todo created successfully",
  });
});

//getting all the todos
app.get("/todos", async (req, res) => {
  const todos = await todo.find();
  res.json({ todos });
});

//updating the todo list i.e completed
app.put("/completed", async (req, res) => {
  const updatePlayLoad = req.body;
  const parsedPlayLoad = updateTodo.safeParse(updatePlayLoad);
  if (!parsedPlayLoad.success) {
    res.status(411).json({
      message: "You sent worng inputs",
    });
    return;
  }

  await todo.updateOne(
    {
      _id: req.body._id,
    },
    {
      completed: true,
    }
  );
  res.json({
    message: "Todo mark as completed",
  });
});

app.listen(3000);
