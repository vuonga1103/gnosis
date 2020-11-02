import React from "react";
import Choice from "./Choice/Choice";
import "./ChoicesContainer.css";

export default function ChoicesContainer({
  choices,
  setSelectedChoice,
  selectedChoice,
  correctChoice,
}) {
  function displayChoices() {
    if (choices) {
      return choices.map((choice) => {
        return (
          <Choice
            selectedChoice={selectedChoice}
            key={choice}
            choice={choice}
            setSelectedChoice={setSelectedChoice}
            correctChoice={correctChoice}
          />
        );
      });
    }
  }
  return (
    <div
      className={`choices-container ${selectedChoice && "disable-container"}`}
    >
      {displayChoices()}
    </div>
  );
}
