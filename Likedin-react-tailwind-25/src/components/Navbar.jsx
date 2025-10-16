import React from "react";

const Navbar = () => {
  return (
    <div className="flex h-16 justify-between items-center py-7  px-10">
      <div className="logo text-blue-500 font-semibold">Linkedin</div>
      <div>
        <input
          className="border w-96 outline-none ml-2 bg-gray-100 py-2 placeholder:px-5"
          type="text"
          placeholder="search job"
        />
        <input
          className="border w-96 outline-none ml-2 bg-gray-100 py-2 placeholder:px-5"
          type="text"
          placeholder="location"
        />
        <button className="bg-blue-500 text-white px-4 ml-3 py-2">
          Search
        </button>
      </div>
      <div className="flex gap-8">
        <button className="bg-blue-500 text-white px-2 py-2">Sign in</button>
        <button className="bg-blue-500 text-white px-2 py-2">Join now</button>
      </div>
    </div>
  );
};

export default Navbar;
