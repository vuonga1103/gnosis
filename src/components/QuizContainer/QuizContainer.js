import React, { useEffect, useState } from "react";
import "./QuizContainer.css";
import Summary from "./Summary/Summary";
import Question from "./Question/Question";
import ChoicesContainer from "./ChoicesContainer/ChoicesContainer";
import Result from "./Result/Result";

export default function QuizContainer() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);

  useEffect(() => {
    fetchQuestions()
      .then((result) => {
        const questions = result.map((q) => {
          const { correct, incorrect, question } = q;

          return {
            question,
            choices: shuffle([correct, ...incorrect]),
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
  }, [currentQuestionIdx]);

  function fetchQuestions() {
    return fetch(
      "https://my-json-server.typicode.com/vuonga1103/gnosis-backend/questions"
    ).then((response) => response.json());
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function displaySummary() {
    return (
      <Summary totalQuestions={questions.length} totalCorrect={totalCorrect} />
    );
  }

  function setNextQuestion() {
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  }

  function setSelectedChoice(choice) {
    const updatedQuestions = questions.map((q, i) => {
      if (i === currentQuestionIdx) {
        q.selectedChoice = choice;
        if (q.selectedChoice === q.correctChoice)
          setTotalCorrect(totalCorrect + 1);
      }
      return q;
    });
    setQuestions(updatedQuestions);
  }

  function displayQuestion() {
    if (questions.length) {
      const { question, choices, correctChoice, selectedChoice } = questions[
        currentQuestionIdx
      ];

      const userHasMadeSelection =
        questions.length && questions[currentQuestionIdx]["selectedChoice"];

      return (
        <>
          <Question
            question={question}
            current={currentQuestionIdx + 1}
            total={questions.length}
          />

          <ChoicesContainer
            selectedChoice={selectedChoice}
            choices={choices}
            setSelectedChoice={setSelectedChoice}
            correctChoice={correctChoice}
          />

          {userHasMadeSelection && (
            <Result
              correctChoice={correctChoice}
              selectedChoice={selectedChoice}
              setNextQuestion={setNextQuestion}
            />
          )}
        </>
      );
    }
  }

  let allQuestionsAnswered = currentQuestionIdx > questions.length - 1;

  return (
    <div>{allQuestionsAnswered ? displaySummary() : displayQuestion()}</div>
  );
}
