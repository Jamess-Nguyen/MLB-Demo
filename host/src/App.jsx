import React from "react";
import ReactDOM from "react-dom";
import Host from "./Host";
import "./index.css";

const App = () => (
  <div>
    <Host />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
