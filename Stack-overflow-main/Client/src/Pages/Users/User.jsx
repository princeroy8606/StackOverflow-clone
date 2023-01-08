import React from "react";
import { Link } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user.id}`} className="user-profile-link">
      <h3>{user.name.charAt(0).toUpper}</h3>
      <h5>{user.name}</h5>
    </Link>
  );
};

export default User;
