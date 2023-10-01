import { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

let cardList = [
  { id: 1, num: "1" },
  { id: 2, num: "2" },
  { id: 3, num: "3" },
  { id: 4, num: "4" },
  { id: 5, num: "5" },
  { id: 6, num: "6" },
  { id: 7, num: "7" },
  { id: 8, num: "8" },
];

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [playerName, setPlayerName] = useState("Agadran");
  const [defaultList, setCardList] = useState(cardList);

  const handleCardClick = (e) => {
    console.log(e.target.textContent);
  };

  return (
    <>
      <h1>Project: Memory Card</h1>
      <div className="scores">
        <p className="current-score">Score: {currentScore}</p>
        <p className="hight-score">
          High score: {highScore} ({playerName})
        </p>
      </div>
      {/* TODO: Card Container */}
      <CardContainer cardList={defaultList} handleClick={handleCardClick} />
      {/* TODO: Game Start Container */}
      {/* TODO: Game End Container */}
    </>
  );
}

export default App;
