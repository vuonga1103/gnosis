import React from "react";

export default function Welcome({ handleStartedClick }) {
  return (
    <div>
      <h4>Welcome to "Who's Said It?", an Office trivia game.</h4>

      <h2>"'You fail 100% of the Office trivia you don't try' - Somebody"</h2>
      <h3>- Michael Scott </h3>

      <button onClick={handleStartedClick}>Get Started</button>
    </div>
  );
}
