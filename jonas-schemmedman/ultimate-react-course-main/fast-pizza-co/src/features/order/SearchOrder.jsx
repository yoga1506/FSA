import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Serach your Order"
        value={query}
        className="w-28 rounded-full bg-yellow-100 px-4  py-3 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 sm:w-64 sm:focus:w-72"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
