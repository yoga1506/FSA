import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-4xl mx-auto flex justify-center space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}
