import React from "react";
import Choice from "./Choice/Choice";

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
  return <div>{displayChoices()}</div>;
}
