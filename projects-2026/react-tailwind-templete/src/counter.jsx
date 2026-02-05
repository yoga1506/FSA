import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.initialValue);

  function handleAdd() {
    dispatch(increment());
  }

  function handleDec() {
    if (value === 0) return;
    dispatch(decrement());
  }

  function handlereset() {
    dispatch(reset());
  }
  return (
    <div>
      <input type="text" value={value} />
      <div className="flex gap-10 mb-7">
        <button
          className="bg-red-600 text-white p-2 w-5 h-5 text-center"
          onClick={handleAdd}
        >
          +
        </button>
        <button
          className="bg-red-600 text-white p-2 w-5 h-5 text-center"
          onClick={handleDec}
        >
          -
        </button>
      </div>
      <button
        className="bg-orange-500 text-white p-2 rounded-3xl"
        onClick={handlereset}
      >
        reset
      </button>
    </div>
  );
};

export default counter;
