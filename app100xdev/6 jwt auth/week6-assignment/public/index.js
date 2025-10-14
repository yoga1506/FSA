document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const todoList = document.getElementById("todo-list");
  const todoForm = document.getElementById("todo-form");

  // Fetch all todos from the server
  const fetchTodos = async () => {
    const response = await fetch("/api/todos");
    const todos = await response.json();
    renderTodos(todos);
  };

  // Render the todos in the UI
  const renderTodos = (todos) => {
    todoList.innerHTML = "";
    todos.forEach((todo) => {
      const todoItem = document.createElement("li");
      todoItem.classList.toggle("completed", todo.completed);

      todoItem.innerHTML = `
          <span>${todo.task}</span>
          <button onclick="toggleComplete(${todo.id})">${
        todo.completed ? "Undo" : "Complete"
      }</button>
          <button class="delete" onclick="deleteTodo(${
            todo.id
          })">Delete</button>
        `;

      todoList.appendChild(todoItem);
    });
  };

  // Add a new task
  todoForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
      await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task }),
      });
      taskInput.value = "";
      fetchTodos(); // Refresh the list
    }
  });

  // Mark task as completed or incomplete
  window.toggleComplete = async (id) => {
    const todo = await fetch(`/api/todos/${id}`).then((res) => res.json());
    await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    fetchTodos(); // Refresh the list
  };

  // Delete a task
  window.deleteTodo = async (id) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    fetchTodos(); // Refresh the list
  };

  fetchTodos(); // Initial fetch to load todos
});
