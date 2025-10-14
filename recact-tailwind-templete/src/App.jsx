import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    if (todo === "") return;
    const neTask = [...todoList, todo];
    setTodoList(neTask);
    setTodo("");
  }

  function deleteTodo(idToDel) {
    const updatedTask = todoList.filter((_, index) => index !== idToDel);
    setTodoList(updatedTask);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add toodo</button>
      </div>
      <ul>
        {todoList.map((item, id) => (
          <>
            <li key={id}>{item}</li>
            <button onClick={() => deleteTodo(id)}>Delete</button>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;
