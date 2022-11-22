import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import "./main.css";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/animals">Animals</NavLink>
      <NavLink to="/birds">Birds</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Nav;
