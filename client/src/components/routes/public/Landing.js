import React from "react";

import "./style.min.css";

import { PostCard } from "../../utils/Cards";

const Landing = () => {
  return (
    <div className="landing">
      <h1 className="landing-title">My MERN Template</h1>
      <div className="post-feed">
        <PostCard title="post one" />
        <PostCard title="post two" />
        <PostCard title="post three" />
        <PostCard title="post four" />
        <PostCard title="post five" />
        <PostCard title="post six" />
        <PostCard title="post seven" />
        <PostCard title="post eight" />
        <PostCard title="post nine" />
        <PostCard title="post ten" />
        <PostCard title="post eleven" />
        <PostCard title="post twelve" />
      </div>
    </div>
  );
};

export default Landing;
