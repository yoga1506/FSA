import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <Button
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
        type={"round"}
      >
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
        type={"round"}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
