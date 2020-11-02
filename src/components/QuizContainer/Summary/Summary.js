import React from "react";
import "./Summary.css";

export default function Summary({ totalQuestions, totalCorrect }) {
  function handleTryAgainClick() {
    return window.location.reload();
  }

  const success = totalCorrect / totalQuestions > 0.6;

  let resultImagePath = "/images/summary/";
  resultImagePath += success ? "success.gif" : "fail.gif";

  return (
    <div className="summary-container">
      <div className="score">{`Score: ${totalCorrect} out of ${totalQuestions}`}</div>

      <div className="character-img-container">
        <img className="character-img" src={resultImagePath} alt="Result GIF" />
      </div>

      <button className="small-btn" onClick={handleTryAgainClick}>
        Try Again
      </button>
    </div>
  );
}
