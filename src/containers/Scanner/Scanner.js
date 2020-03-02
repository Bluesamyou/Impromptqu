import React from "react";
import "./Scanner.css";

const Scanner = props => {
  return (
    <div className="scanner-container">
      <div className="button-container">
        <button className="join-queue-button">Join a queue</button>
        <button className="my-queues-button">My Queues</button>
      </div>
    </div>
  );
};

export default Scanner;
