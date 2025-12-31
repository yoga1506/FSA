import React, { useState } from "react";
import "./styles.css";
import { Todo } from "../model";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ setTodos, todos, todo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDelete = (id: number) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleEdit = (id: number, e: React.FormEvent) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form onSubmit={(e) => handleEdit(todo.id, e)} className="todos__single">
      {edit ? (
        <input
          className="todos__single--test"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span className="icon">
          <AiFillEdit
            onClick={() => {
              if (!edit && !todo.isDone) {
                setEdit(!edit);
              }
            }}
          />
        </span>
        <span onClick={() => handleDelete(todo.id)} className="icon">
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(todo.id)} className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
