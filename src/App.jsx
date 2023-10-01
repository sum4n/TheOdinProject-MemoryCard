import { useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

const cardObjList = [
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
  const [cardList, setCardList] = useState(cardObjList);

  const handleCardClick = () => {
    let shuffledArray = cardList.sort((a, b) => 0.5 - Math.random());
    // console.log(shuffledArray);
    setCardList(() => {
      return [...shuffledArray];
    });
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
      <CardContainer cardList={cardList} handleClick={handleCardClick} />
      {/* TODO: Game Start Container */}
      {/* TODO: Game End Container */}
    </>
  );
}

export default App;
