import React, { createContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  function handleAdd() {
    if (text === "") return null;
    setTodo([text, ...todo]);
    setText("");
  }

  function handleDelete(itemToDelete) {
    const updatedTodo = todo.filter((t) => t !== itemToDelete);
    setTodo(updatedTodo);
  }

  return (
    <TodoContext.Provider
      value={{ todo, setTodo, text, setText, handleAdd, handleDelete }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
