import React from "react";
import "./ticket.css";
const Ticket = (props) => {
  return <button className="ticket">{props.title}</button>;
};

export default Ticket;
