// server/server.js
const express = require("express");
const app = express();
const path = require("path");

// Middleware to parse JSON request body
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "client"))); // Serve static files from the 'client' directory

// In-memory storage for todos
let todos = [];

// Routes

// Get all tasks
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Add a new task
app.post("/api/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ message: "Task content is required." });
  }
  const newTask = { id: Date.now(), task, completed: false };
  todos.push(newTask);
  res.status(201).json(newTask);
});

// Update a task (mark as completed or change task description)
app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));

  if (!todo) {
    return res.status(404).json({ message: "Task not found." });
  }

  if (task) {
    todo.task = task;
  }
  if (typeof completed === "boolean") {
    todo.completed = completed;
  }

  res.json(todo);
});

// Delete a task
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((t) => t.id !== parseInt(id));
  res.status(204).send();
});

// Catch-all route for serving the frontend
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
