import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Calendar from "./Calendar";
const App = () => (
  <div>
    <div>Name: calendar</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Calendar />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
