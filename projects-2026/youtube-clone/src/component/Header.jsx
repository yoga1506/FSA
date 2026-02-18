import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between items-center border-b border-stone-300 px-10 py-5">
      <div className="flex gap-4 items-center">
        <Link to={"/"} className="text-xl font-semibold text-blue-700">
          InDeed
        </Link>
        <ul className="flex gap-4 text-sm ml-6">
          <Link>Home</Link>
          <Link>Company reviews</Link>
          <Link>Salary guide</Link>
        </ul>
      </div>
      <div className="text-sm flex gap-4">
        <Link to={"/login"} className="text-blue-600 font-semibold">
          Sign In
        </Link>
        <Link to={"/employer"}>Employers / Post job</Link>
      </div>
    </div>
  );
};

export default Header;
