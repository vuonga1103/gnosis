import React from "react";

export default function Summary({ totalQuestions, totalCorrect }) {
  function handleTryAgainClick() {
    return window.location.reload();
  }

  const success = totalCorrect / totalQuestions > 0.6;

  let resultImagePath = "/images/summary/";
  resultImagePath += success ? "success.gif" : "fail.gif";

  return (
    <>
      <div>{`Score: ${totalCorrect} out of ${totalQuestions}`}</div>

      <div>
        <img className="character-img" src={resultImagePath} alt="Result GIF" />
      </div>

      <button onClick={handleTryAgainClick}>Try Again</button>
    </>
  );
}
