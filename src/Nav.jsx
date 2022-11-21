import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import "./main.css";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/animals">Animals</Link>
      <Link to="/birds">Birds</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Nav;
