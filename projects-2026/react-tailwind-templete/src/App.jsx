import React from "react";
import Form from "./Form";
import { TodoProvider } from "./Context";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <Form />
      </div>
    </TodoProvider>
  );
};

export default App;
