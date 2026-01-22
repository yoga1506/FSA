import React, { useContext } from "react";
import { TodoContext } from "./Context";

const Form = () => {
  const { todo, text, setText, handleAdd, handleDelete } =
    useContext(TodoContext);

  return (
    <>
      <div>
        <input
          type="text"
          className="border"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd();
          }}
        />
        <button onClick={handleAdd}>AddTodo</button>
      </div>
      <div>
        {todo.map((tooooo, id) => (
          <div className="flex gap-24 pt-4 " key={id}>
            <li>{tooooo}</li>
            <button
              onClick={() => handleDelete(tooooo)}
              className="bg-red-400 text-white px-3 py-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
