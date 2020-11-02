import React from "react";
import "./Choice.css";

export default function Choice({
  choice,
  setSelectedChoice,
  selectedChoice,
  correctChoice,
}) {
  function handleChoiceSelect() {
    if (!selectedChoice) setSelectedChoice(choice);
  }

  function setColor() {
    if (selectedChoice) {
      if (choice === selectedChoice && choice !== correctChoice) {
        return "#ea5455";
      } else if (choice === selectedChoice && choice === correctChoice) {
        return "#28df99";
      } else if (choice !== selectedChoice && choice === correctChoice) {
        return "#28df99";
      } else {
        return "#696969";
      }
    }
  }

  return (
    <div
      className={`choice ${selectedChoice && "disable"}`}
      onClick={handleChoiceSelect}
      style={{ backgroundColor: setColor() }}
    >
      {choice}
    </div>
  );
}
