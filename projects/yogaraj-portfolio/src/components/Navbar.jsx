import React from "react";

const Navbar = () => {
  return (
    <nav className="sm:flex  justify-between border-b-2 border-gray-200 px-10 py-4 sm:py-2 items-center">
      <div className="logo font-bold md:text-xl ">
        <h1 className="text-center">YOGA</h1>
      </div>

      <ul className="hidden md:flex gap-12 text-sm font-semibold uppercase ">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
