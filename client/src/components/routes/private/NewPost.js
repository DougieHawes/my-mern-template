import React from "react";

import "./style.min.css";

import { Button1 } from "../../utils/Buttons";
import { Input1, Input2, Input3 } from "../../utils/Inputs";

const NewPost = () => {
  return (
    <div className="new-post">
      <h2 className="new-post-title">NewPost</h2>
      <form>
        <Input1 placeholder="enter post title..." />
        <Input3 />
        <Input2 placeholder="enter post text..." />
        <Input1 placeholder="enter link..." />
        <Button1 text="submit" />
      </form>
    </div>
  );
};

export default NewPost;
