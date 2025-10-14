import React from "react";

const Options = ({ question, answer, dispatch }) => {
  const hasAnswerd = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={hasAnswerd}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          key={option}
          className={`btn btn-option ${index === answer ? "answer" : ""}
         ${
           hasAnswerd
             ? index === question.correctOption
               ? "correct"
               : "wrong"
             : ""
         }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
