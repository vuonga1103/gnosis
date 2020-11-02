import React from "react";

export default function Choice({
  choice,
  setSelectedChoice,
  selectedChoice,
  correctChoice,
}) {
  function handleChoiceSelect() {
    if (!selectedChoice) setSelectedChoice(choice);
  }

  function setFontColor() {
    if (selectedChoice) {
      // If the user has made a choice
      // If the choice is the selected choice and the selected choice is incorrect
      // If the choice is the selected choice and the selected choice is correct
      // If the choice is not the selected choice and the choice is correct
      if (choice === selectedChoice && choice !== correctChoice) {
        return "red";
      } else if (choice === selectedChoice && choice === correctChoice) {
        return "green";
      } else if (choice !== selectedChoice && choice === correctChoice) {
        return "green";
      } else {
        return "grey";
      }
    }
  }

  return (
    <div onClick={handleChoiceSelect} style={{ color: setFontColor() }}>
      {choice}
    </div>
  );
}
