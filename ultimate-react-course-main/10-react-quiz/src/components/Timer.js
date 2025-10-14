import React, { useEffect } from "react";

const Timer = ({ dispatch, secoundsRemaining }) => {
  const minutes = Math.floor(secoundsRemaining / 60);
  const secounds = Math.floor(secoundsRemaining % 60);

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return (
    <div className="timer">
      {minutes < 10 && "0"}
      {minutes}:{secounds < 10 && 0}
      {secounds}
    </div>
  );
};

export default Timer;
