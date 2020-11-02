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
    <div>
      <div>
        {userChoseCorrect ? "You got it!" : `${selectedChoice} is incorrect.`}
      </div>
      <div>The correct answer is {correctChoice}.</div>

      <button onClick={setNextQuestion}>Next</button>

      <div>
        <img className="character-img" src={imgPath} alt="Character GIF" />
      </div>
    </div>
  );
}
