import React from "react";
import { useSelector } from "react-redux";

const UserName = () => {
  const username = useSelector((s) => s.user.username);
  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block ">{username}</div>
  );
};

export default UserName;
