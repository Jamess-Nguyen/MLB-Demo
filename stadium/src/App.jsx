import React from "react";
import ReactDOM from "react-dom";
import Stadium from "./Stadium";
import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: stadium</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <Stadium />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
