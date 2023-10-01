import { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  return (
    <>
      <h1>Project: Memory Card</h1>
      <div className="scores">
        <p className="current-score">Score: {currentScore}</p>
        <p className="hight-score">High score: {highScore}</p>
      </div>
      {/* TODO: Card Container */}
      <CardContainer />
      {/* TODO: Game Start Container */}
      {/* TODO: Game End Container */}
    </>
  );
}

export default App;
