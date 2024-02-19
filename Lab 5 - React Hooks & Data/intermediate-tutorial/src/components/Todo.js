import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TextField
        id="outlined-basic"
        variant="outlined"
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <br />
      <br />
      <Button variant="contained" onClick={addTodo}>
        Add
      </Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <br />
            <h2>{todo}</h2>

            <Button variant="outlined" onClick={() => removeTodo(index)}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
