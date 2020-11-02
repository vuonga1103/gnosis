import React from "react";
import "./Question.css";

export default function Question({ question, current, total }) {
  return (
    <div className="question-container">
      <div className="question-count">
        Question {current} / {total}
      </div>
      <div className="question-text">"{question}"</div>
    </div>
  );
}
