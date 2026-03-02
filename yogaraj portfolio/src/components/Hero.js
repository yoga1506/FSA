import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse">
          Yogaraj
        </h1>
        <p className="text-2xl mb-6">React Developer</p>
        <p className="mb-6 max-w-xl mx-auto">
          Building modern, responsive web applications with React and Tailwind
          CSS
        </p>
        <Link
          to="/about"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
