import React from "react";

import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodosList: React.FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <SingleTodo todos={todos} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodosList;
