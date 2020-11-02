import React from "react";
import "./Welcome.css";

export default function Welcome({ handleStartedClick }) {
  return (
    <div className="welcome-container">
      <h1 className="welcome-header">Welcome to "Who Said It?"</h1>
      <h2 className="welcome-subheader">An Office Trivia Game</h2>
      <div className="get-started-container">
        <button className="get-started" onClick={handleStartedClick}>
          START
        </button>
      </div>
      <img
        className="office-sign"
        src="/images/the-office.png"
        alt="The Office Sign"
      />
    </div>
  );
}
