import React from "react";
import "./about.css";
import Nav from "./Nav";

const About = () => {
  return (
    <>
      <Nav />
      <div className="about">
        <h2>About the Animal Farm</h2>
        <p>
          This web application is based on the Animal Farm by George Orwell.
          According to Wikipedia, the original Animal Farm is a beast fable, in
          the form of satirical allegorical novella, by George Orwell, first
          published in England on 17 August 1945. It tells the story of a group
          of farm animals who rebel against their human farmer, hoping to create
          a society where the animals can be equal, free, and happy. Ultimately,
          the rebellion is betrayed, and the farm ends up in a state as bad as
          it was before, under the dictatorship of a pig named Napoleon.
          <br />
          <br />
          In this app you have the ability to like your favorite animals and
          create a collection of your favorite animals by removing others you
          find less interesting to be in you personal collection.
        </p>
      </div>
    </>
  );
};

export default About;
