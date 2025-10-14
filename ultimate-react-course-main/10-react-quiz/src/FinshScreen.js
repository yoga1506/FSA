import React from "react";

const FinshScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🎉";
  if (percentage >= 80 && percentage < 100) emoji = "🎂";
  if (percentage >= 50 && percentage < 70) emoji = "😐";
  if (percentage === 0) emoji = "😔";

  return (
    <>
      <div className="result">
        <p>
          <span>{emoji}</span> You scored {points} out of {maxPossiblePoints} (
          {Math.ceil(percentage)}) %
        </p>
      </div>
      <p className="highscore">Highscore : {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Finished
      </button>
    </>
  );
};

export default FinshScreen;
