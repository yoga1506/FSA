// import { useReducer } from "react";

// const initialState = {
//   count: 0,
//   step: 1,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "inc":
//       return { ...state, count: state.count + 1 };

//     case "dec":
//       return { ...state, count: state.count - 1 };

//     case "reset":
//       return { ...state, count: (state.count = initialState.count) };

//     case "defineCount":
//       return { ...state, count: action.payload };

//     default: {
//       throw new Error("unknown action");
//     }
//   }
// }

// function DateCounter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { count, step } = state;

//   // This mutates the date object.
//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     dispatch({ type: "dec", payload: 1 });
//   };

//   const inc = function () {
//     dispatch({ type: "inc", payload: 1 });
//   };

//   const defineStep = function (e) {};

//   const reset = function () {
//     dispatch({ type: "reset" });
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;

import React, { useReducer } from "react";

const DateCounter = () => {
  const initialState = { count: 0, step: 1 };

  function reducer(state, action) {
    switch (action.type) {
      case "inc":
        return { ...state, count: state.count + 1 };
      case "dec":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: (state.count = initialState.count) };

      default:
    }
  }

  function inc() {
    dispatch({ type: "inc", payload: 1 });
  }
  function dec() {
    dispatch({ type: "dec", payload: 1 });
  }
  function defineCount() {
    dispatch({ type: "inc", payload: 1 });
  }
  function reset() {
    dispatch({ type: "reset" });
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state;

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={dec}>-</button>
        <input type="text" value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default DateCounter;
