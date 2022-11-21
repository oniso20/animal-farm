import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="home-card">
          <div id="image">
            <Link to="/animals">
              <img
                src={`https://source.unsplash.com/500x400/?mammal`}
                alt="Animal"
              />
              <h2>Animals</h2>
            </Link>
          </div>
        </div>
        <div className="home-card">
          <div id="image">
            <Link to="/birds">
              <img
                src={`https://source.unsplash.com/500x400/?bird`}
                alt="Bird"
              />
              <h2>Birds</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
