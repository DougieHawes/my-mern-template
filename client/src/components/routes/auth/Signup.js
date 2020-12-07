import React from "react";

import "./style.min.css";

import { Button1 } from "../../utils/Buttons.js";
import { Input1 } from "../../utils/Inputs.js";

const Signup = () => {
  return (
    <div className="auth-form">
      <h3 className="auth-form-title">SIGN-UP</h3>
      <form>
        <Input1 placeholder="enter name..." />
        <Input1 placeholder="enter email..." />
        <Input1 placeholder="enter password..." />
        <Input1 placeholder="confirm password..." />
        <Button1 text="submit" />
      </form>
    </div>
  );
};

export default Signup;
