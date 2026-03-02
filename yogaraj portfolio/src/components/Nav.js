import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/services", label: "Services" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow fixed w-full z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <Link
              to="/"
              className="flex items-center py-5 px-2 text-gray-700 font-bold"
            >
              Yogaraj
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-button"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
          <div
            className={`${isOpen ? "block" : "hidden"} md:flex items-center space-x-1`}
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-5 px-3 text-gray-700 hover:text-blue-500 transition"
                onClick={() => setIsOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
