import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogoYoutube } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b border-gray-200 border-y-2   py-2  px-10">
      <div className="flex items-center ">
        <RxHamburgerMenu className="w-6 h-6 cursor-pointer" />
        <IoLogoYoutube className="ml-6 w-8 h-8 text-red-600 cursor-pointer" />
        <p className="tex-xl font-bold text-red-600 ml-3">Youtube</p>
      </div>
      <div className="hidden sm:flex items-center">
        <div className="flex items-center ">
          <input
            className="border placeholder-black w-96 rounded-xl outline-none border-gray-200 p-2 "
            type="text"
            placeholder="Search"
          ></input>
          <CiSearch className="mr-5 w-5 h-5 cursor-pointer" />
        </div>

        <FaMicrophone className="ml-7  w-5 h-5   text-gray-700" />
      </div>
      <div className="hidden sm:flex items-center mr-2 border px-2 py-1 cursor-pointer rounded-xl border-blue-500 text-center">
        <FaUserCircle className="w-6 h-6 text-blue-500" />
        <button className="text-blue-500 text-sm font-semibold ml-2">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
