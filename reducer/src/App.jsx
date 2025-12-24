import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + 1 };
    case "dec":
      return { ...state, count: state.count - 1 };

    case "reset":
      return { ...state, count: initialState.count };

    default:
      return state;
  }
}

const App = () => {
  const [{ count }, dispatch] = useReducer(reducer, initialState);

  function handleInc() {
    dispatch({ type: "inc" });
  }
  function handleDec() {
    if (count === 0) return alert("no negative value");

    dispatch({ type: "dec" });
  }

  function reset() {
    dispatch({ type: "reset" });
    console.log(count);
  }

  return (
    <div className="bg-red-100 h-screen w-screen">
      <div className="py-36 flex item-center justify-center">
        <div className="text-center border p-10 rounded">
          <h1 className="font-bold uppercase mb-4">Counter</h1>
          <p>Simple counter app</p>
          <div className="flex item-center   justify-between mt-8">
            <button
              onClick={handleDec}
              className="text-red-500 bg-yellow-400 text-2xl w-10 h-10 cursor-pointer "
            >
              -
            </button>
            <h1>{count}</h1>
            <button
              onClick={handleInc}
              className="text-red-500 bg-yellow-400 text-2xl w-10 h-10 cursor-pointer "
            >
              +
            </button>
          </div>
          <button
            onClick={reset}
            className="mt-4 bg-green-400  p-2 rounded w-24 cursor-pointer"
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
