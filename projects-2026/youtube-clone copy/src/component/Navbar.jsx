import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-4">
      <div className=" ">Yoga Technologies</div>
      <div className="hidden sm:flex gap-4">
        {" "}
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/product"}>Prodcts</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
      <div className="sm:hidden">----</div>
    </nav>
  );
};

export default Navbar;
