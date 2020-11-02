import React from "react";

export default function Question({ question, current, total }) {
  return (
    <>
      <div>
        Question {current} of {total}
      </div>
      <div>"{question}"</div>
    </>
  );
}
