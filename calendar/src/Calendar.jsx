import React from "react";
import "./calendar.css";
import Game from "./Game";
const Calendar = (props) => {
  return (
    <div className="home-container">
      <div className="grid-container">
        <Game title="LA Angels vs. Chicago White Sox" />
        <br></br>
        <Game title="LA Angels vs. SF Giants" />
        <br></br>
        <Game title="LA Angels vs. Cincinatti Reds" />
      </div>
    </div>
  );
};

export default Calendar;
