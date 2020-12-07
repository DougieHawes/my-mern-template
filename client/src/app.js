import React from "react";

import { Route } from "react-router-dom";

import "./style.min.css";

import Navbar from "./components/layout/Navbar";

import Landing from "./components/routes/public/Landing";

import Users from "./components/routes/private/Users";
import NewPost from "./components/routes/private/NewPost";
import Profile from "./components/routes/private/Profile";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="route-box">
        <Route exact path="/" component={Landing} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/new-post" component={NewPost} />
        <Route exact path="/profile" component={Profile} />
      </div>
    </div>
  );
};

export default App;
