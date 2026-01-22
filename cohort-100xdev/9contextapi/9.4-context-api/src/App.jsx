import React, { createContext, useContext, useState } from "react";

const CountContext = createContext();

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

function Parent() {
  return (
    <div style={{ margin: 50 }}>
      <CountContextProvider>
        <Increase />
        <Decrease />
        <Value />
      </CountContextProvider>
    </div>
  );
}

function Increase() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}
function Decrease() {
  const { count, setCount } = useContext(CountContext);

  return <button onClick={() => setCount(count - 1)}>Decrease</button>;
}
function Value() {
  const { count } = useContext(CountContext);
  return <p>count : {count}</p>;
}

export default App;
