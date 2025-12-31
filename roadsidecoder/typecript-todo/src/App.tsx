import React, { useState } from "react";
import "../src/components/styles.css";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodosList from "./components/TodosList";
import { DragDropContext } from "react-beautiful-dnd";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodo, setCompletedTodo] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <DragDropContext>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setCompletedTodo={setCompletedTodo}
          completedTodo={completedTodo}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
