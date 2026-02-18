import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center py-24">
      <div className=" max-w-[500px] px-5 py-8 text-center text-stone-600 border border-stone-300 rounded-3xl ">
        <Link to={"/"} className="text-xl font-semibold text-blue-700 mb-4">
          Indeed
        </Link>
        <div className="py-5 text-justify">
          <h1 className="font-semibold text-xl mb-4">
            To see more than one page of jobs, create an account or sign in
          </h1>
          <p className="text-sm mb-4">
            By clicking any of the ‘Continue’ options below, you understand and
            agree to Indeed's Terms. You also consent to our Cookie and Privacy
            policies. You will receive marketing messages from Indeed and may
            opt out at any time by following the unsubscribe link in our
            messages, or as detailed in our terms.
          </p>
          <div className="capitalize flex flex-col py-3 gap-5">
            <button className="border border-stone-200 hover:bg-stone-100 transition-all duration-400 rounded-xl px-3 py-2 font-semibold tracking-widest">
              Login with google
            </button>
            <button className="border border-stone-200 hover:bg-stone-100 transition-all duration-400 rounded-xl px-3 py-2 font-semibold tracking-widest">
              Login with apple
            </button>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-4" htmlFor="">
            Email address or phone number *
          </label>
          <input
            className="outline-none border border-stone-200 rounded-2xl px-4 py-2 mb-4 text-gray-400"
            type=""
            placeholder="your email or phone number"
          />
          <button className="bg-blue-500 text-xl text-white font-semibold py-2 rounded-2xl">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
