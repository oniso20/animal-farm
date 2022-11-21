import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./nav.css";
import "./main.css";
import Home from "./Home";
import Animals from "./Animals";
import Birds from "./Birds";
import About from "./About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
