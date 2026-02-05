import React from "react";
import Counter from "./counter";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-2xl p-4 text-center font-bold capitalize">redux</h1>
        <Counter />
      </div>
    </div>
  );
};

export default App;
