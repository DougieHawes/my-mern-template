import React from "react";

import "./style.min.css";

import { UserCard } from "../../utils/Cards";

const Users = () => {
  return (
    <div className="users">
      <h2 className="users-title">Users</h2>
      <div className="users-grid">
        <UserCard username="user one" />
        <UserCard username="user two" />
        <UserCard username="user three" />
        <UserCard username="user four" />
        <UserCard username="user five" />
        <UserCard username="user six" />
        <UserCard username="user seven" />
        <UserCard username="user eight" />
        <UserCard username="user nine" />
        <UserCard username="user ten" />
        <UserCard username="user eleven" />
        <UserCard username="user twelve" />
      </div>
    </div>
  );
};

export default Users;
