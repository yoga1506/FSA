import React from "react";

const NoteCard = ({ note }) => {
  return (
    <div className="border border-primary p-4">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteCard;
