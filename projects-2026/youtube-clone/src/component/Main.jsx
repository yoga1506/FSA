import React from "react";
import { Link } from "react-router";

const Main = () => {
  return (
    <>
      <div className="flex justify-center  mt-8">
        <div className="flex relative  border border-stone-400 rounded-xl px-4 w-[600px] ">
          <div className="w-full flex ">
            <input
              type="text"
              placeholder="Location"
              className="  border-r py-2 outline-none w-1/2"
            />
            <input
              type="text"
              placeholder="Location"
              className="  ml-4 py-2 outline-none w-1/2"
            />
          </div>
          <button className="bg-blue-500 absolute right-1 top-1 px-2 text-white rounded-sm py-1  cursor-pointer  ">
            Find Jobs
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-24">
        <h1 className="text-blue-600 text-5xl font-semibold mb-3">Indeed</h1>
        <h2 className="text-xl mb-2 text-stone-800">
          Your next job starts here
        </h2>
        <p>
          Create an account or sign in to see your personalised job
          recommendations.
        </p>
        <Link
          to={"/login"}
          className="bg-blue-600 text-white mt-4 px-8 py-2 font-bold rounded-2xl"
        >
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Main;
