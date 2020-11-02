import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import QuizContainer from "./components/QuizContainer/QuizContainer";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [started, setStarted] = useState(false);

  function handleStartedClick() {
    setStarted(true);
  }

  return (
    <div className="App">
      <Logo />

      {started ? (
        <QuizContainer />
      ) : (
        <Welcome handleStartedClick={handleStartedClick} />
      )}
    </div>
  );
}

export default App;
