import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form onSubmit={handleAdd} className="input">
      <input type="text" placeholder="Enter the input" className="input__box" />
      <button type="submit" className="input__btn">
        Go
      </button>
    </form>
  );
};

export default InputField;
