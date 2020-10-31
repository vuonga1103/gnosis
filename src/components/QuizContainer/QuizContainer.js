import React, { useEffect, useState } from "react";
import "./QuizContainer.css";

export default function QuizContainer() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);

  useEffect(() => {
    fetchQuestions()
      .then((result) => {
        const questions = result.map((q) => {
          const { correct, incorrect, question } = q;

          return {
            question,
            choices: [correct, ...incorrect],
            correctChoice: correct,
            selectedChoice: null,
          };
        });

        setQuestions(questions);
      })
      .catch((error) => {
        console.log(error);
        return null;
      });
    // return () => {
    //   cleanup
    // }
  }, [currentQuestionIdx]);

  function fetchQuestions() {
    return fetch("http://localhost:3000/questions").then((response) =>
      response.json()
    );
  }

  function totalCorrect() {
    if (questions.length) {
      return questions.reduce((sum, question) => {
        const { correctChoice, selectedChoice } = question;

        return correctChoice === selectedChoice ? sum + 1 : 0;
      }, 0);
    }
  }

  console.log("totalCorrect: ", totalCorrect());

  return <div>Hello from Quiz Container</div>;
}
