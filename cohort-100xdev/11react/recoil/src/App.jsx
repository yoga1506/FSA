// type 1 using normal useState

import { memo, useEffect, useState } from "react";

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CounterDiv count={count} />
//       <Increase setCount={setCount} />
//       <Decrease setCount={setCount} />
//     </div>
//   );
// }

// function CounterDiv({ count }) {
//   return <div>count : {count}</div>;
// }

// function Increase({ setCount }) {
//   function increase() {
//     setCount((c) => c + 1);
//   }

//   return <button onClick={increase}>Increase</button>;
// }
// function Decrease({ setCount }) {
//   function decrease() {
//     setCount((c) => c - 1);
//   }
//   return <button onClick={decrease}>Decrease</button>;
// }

// export default App;
