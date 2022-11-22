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
          <Route path="/animal-farm" element={<Home />} />
          <Route path="/animal-farm/animals" element={<Animals />} />
          <Route path="/animal-farm/birds" element={<Birds />} />
          <Route path="/animal-farm/about" element={<About />} />
          <Route path="/*" element={<h3>Not Found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
