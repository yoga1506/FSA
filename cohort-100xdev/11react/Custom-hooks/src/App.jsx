// import React, { useState } from "react";
// import { useFetch } from "../src/hooks/useFetch";

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const { finalData, loading } = useFetch(
//     `https://jsonplaceholder.typicode.com/todos/${currentPage}`
//   );
//   // console.log("page rerendered");

//   if (loading) {
//     return <div>Loading ....</div>;
//   }

//   return (
//     <div>
//       <button onClick={() => setCurrentPage(1)}>1</button>
//       <button onClick={() => setCurrentPage(2)}>2</button>
//       <button onClick={() => setCurrentPage(3)}>3</button>
//       <br />
//       <br />
//       {JSON.stringify(finalData)}
//     </div>
//   );
// };

// export default App;

// useprev hooks

// import React, { useState } from "react";
// import { usePrev } from "./hooks/usePrev";

// const App = () => {
//   const [state, setState] = useState(0);
//   const prev = usePrev(state);
//   return (
//     <div>
//       <p>{state}</p>
//       <button onClick={() => setState(state + 1)}>Click me</button>
//       <p>Previous valuse : {prev} </p>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  const [inputVal, setInputVal] = useState("");

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    //expensive operations
  }, [inputVal]);

  return (
    <div>
      <input type="text" value={inputVal} onChange={change} />
    </div>
  );
};

export default App;
