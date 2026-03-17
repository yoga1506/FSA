import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <Button onClick={() => dispatch(decreaseItemQuantity(id))} type={"round"}>
        -
      </Button>
      <Button type={"round"}>+</Button>
    </div>
  );
};

export default UpdateItemQuantity;
