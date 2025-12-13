import React, { useState } from "react";

const App = () => {
  return (
    <div>
      <h1>Movie App</h1>
      <MovieCard />
    </div>
  );
};
function MovieCard() {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Movie Details</h1>
      <button onClick={() => setIsLiked(!isLiked)}>
        {isLiked ? "❤" : "🤪"}
      </button>{" "}
      <br />
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-red-500 text-white p-2 mt-4 mb-4 px-6 py-2  cursor-pointer"
      >
        Likes
      </button>
      <p>No of Likes : {count}</p>
    </div>
  );
}

export default App;
