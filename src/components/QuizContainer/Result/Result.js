import React from "react";
import "./Result.css";

export default function Result({
  correctChoice,
  selectedChoice,
  setNextQuestion,
}) {
  const userChoseCorrect = correctChoice === selectedChoice;
  const imgPath = `/images/${correctChoice.toLowerCase()}.gif`;

  return (
    <div className="result-container">
      <div>
        {userChoseCorrect ? "You got it!" : `${selectedChoice} is incorrect.`}
      </div>
      <div className="correct-answer">
        The correct answer is <strong>{correctChoice}</strong>.
      </div>

      <button className="small-btn" onClick={setNextQuestion}>
        NEXT
      </button>

      <div className="character-img-container">
        <img className="character-img" src={imgPath} alt="Character GIF" />
      </div>
    </div>
  );
}
