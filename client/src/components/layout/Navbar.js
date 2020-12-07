import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import "./style.min.css";

import Signup from "../routes/auth/Signup.js";
import Signin from "../routes/auth/Signin.js";

const Navbar = () => {
  const [showModal, setModal] = useState(false);
  const [showSignin, setSignin] = useState(false);
  const [isLogged, setLogged] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1 className="title">
          <Link to="/">My MERN Template</Link>
        </h1>
      </div>
      <div className="navbar-links">
        {isLogged ? (
          <>
            <div className="navbar-link">
              <NavLink to="/new-post">new-post</NavLink>
            </div>
            <div className="navbar-link">
              <NavLink to="/users">users</NavLink>
            </div>
            <div className="navbar-link">
              <NavLink to="/profile">profile</NavLink>
            </div>
          </>
        ) : (
          <div className="navbar-link" onClick={() => setModal(true)}>
            signin
          </div>
        )}
      </div>
      {showModal && (
        <div className="modal-container">
          <div className="modal">
            <div className="close-modal" onClick={() => setModal(false)}>
              CLOSE
            </div>
            {showSignin ? <Signin /> : <Signup />}
            <div className="modal-header">
              <div
                className={`modal-tab ${!showSignin && "modal-tab-closed"}`}
                onClick={() => setSignin(true)}
              >
                signin
              </div>
              <div
                className={`modal-tab ${showSignin && "modal-tab-closed"}`}
                onClick={() => setSignin(false)}
              >
                signup
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
