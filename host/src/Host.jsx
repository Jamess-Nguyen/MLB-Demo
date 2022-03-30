import React from "react";
import "./index.css";
import NavBar from "navbar/NavBar";
import Home from "home/Home";
import Calendar from "calendar/Calendar";
import Stadium from "stadium/Stadium";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Host = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="center-screen">
                <Home />
              </div>
            }
          />
          <Route
            path="/Packages"
            element={
              <div className="center-screen">
                <Home />
              </div>
            }
          />
          <Route
            path="/Stadium"
            element={
              <div className="center-screen">
                <Stadium />
              </div>
            }
          />
          <Route
            path="/Calendar"
            element={
              <div className="center-screen">
                <Calendar />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default Host;
