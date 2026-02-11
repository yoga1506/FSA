import React from "react";

const Button = ({ children, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300"
    >
      {children}
    </button>
  );
};

export default Button;
