import React from "react";

import "./style.min.css";

import Navbar from "./components/layout/Navbar";

import Landing from "./components/routes/public/Landing";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="route-box">
        <Landing />
      </div>
    </div>
  );
};

export default App;
