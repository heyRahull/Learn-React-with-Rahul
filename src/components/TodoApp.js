import React, { useState } from "react";
import "./TodoApp.css"; // Importing styles

const TodoApp = () => {
  const [task, setTask] = useState(""); // To store user input
  const [todos, setTodos] = useState([]); // To store list of tasks

  // Add new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask(""); // Clear input after adding
    }
  };

  // Delete task
  const removeTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container">
      <h2>📝 TODO App</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTask(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
