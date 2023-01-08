import React from "react";
import { useSelector } from "react-redux";
import User from "./User";
import './User.css'

function UsersList() {
  const users = useSelector((state) => state.usersReducer);
  return (
    <div className=" userList-container">
      {users.map((user) => (
        <User User={user} key={user?.id} />
      ))}
    </div>
  );
}

export default UsersList;
