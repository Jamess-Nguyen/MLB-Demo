import React from "react";
import Ticket from "./Ticket";
import "./ticket.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="grid-container">
        <Ticket title="Single Ticket" />
        <br></br>
        <Ticket title="Renewal Ticket" />
      </div>
    </div>
  );
};

export default Home;
