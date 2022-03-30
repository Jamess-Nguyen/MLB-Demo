import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => (
  <div className="container">
    <div>Name: navbar</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Router>
      <NavBar />
    </Router>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
