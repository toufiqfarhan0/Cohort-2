import { useState } from "react";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "go to the gym 1-3",
      completed: true,
    },
    {
      title: "Coding",
      description: "do the coding 1-2",
      completed: false,
    },
  ]);
  function onClickHandler() {
    setTodos([
      ...todos,
      {
        title: "New todo added Playings",
        description: "dec of the this playing",
      },
    ]);
  }
  return (
    <div>
      <button onClick={onClickHandler}>Add a New Todo</button>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={todo.description}></Todo>;
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
