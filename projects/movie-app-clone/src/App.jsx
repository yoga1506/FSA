import React, { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("super");

  async function fetchMovies() {
    try {
      const res =
        await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=b0d90961
`);
      const data = await res.json();
      if (data.Search) {
        setMovies(data.Search);
        console.log(data);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="bg-black  text-white py-4">
      <div className="flex justify-between items-center px-96">
        <h1 className="text-3xl">Movie World</h1>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search Movies...."
          className="border border-white px-8"
        />
      </div>
      <h1 className="text-white text-2xl">Movies</h1>

      {movies.length > 0 ? (
        <ul className="grid grid-cols-4 mt-24 px-24">
          {movies.map((m) => (
            <div className="flex flex-col">
              <li className="w-56 " key={m.imdbID}>
                <img src={m.Poster} alt="images" />
                {m.Title} ({m.Year})
              </li>
            </div>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default App;
