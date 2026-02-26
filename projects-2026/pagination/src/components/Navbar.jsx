import React from "react";

const Navbar = () => {
  return (
    <nav className="text-stone-800 font-semibold border-b-2 border-b-stone-300 flex justify-between px-10 py-3">
      <div>Logo</div>
      <ul className="flex gap-7">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
