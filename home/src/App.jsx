import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Home from "./Home";
const App = () => (
  <div>
    <div>Name: home</div>
    <Home />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
