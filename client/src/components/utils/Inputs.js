import React from "react";

import "./style.min.css";

export const Input1 = ({ placeholder }) => (
  <input className="input input1" type="text" placeholder={placeholder} />
);

export const Input2 = ({ placeholder }) => (
  <textarea className="input input2" type="text" placeholder={placeholder} />
);

export const Input3 = ({ placeholder }) => (
  <input className="input input3" type="file" placeholder={placeholder} />
);
