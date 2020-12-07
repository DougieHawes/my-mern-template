import React from "react";

import "./style.min.css";

export const PostCard = ({ title }) => <div className="post">{title}</div>;

export const UserCard = ({ username }) => (
  <div className="user">{username}</div>
);
