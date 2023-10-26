import { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

let clickedCardList = [];

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [playerName, setPlayerName] = useState("Agadran");
  const [cardList, setCardList] = useState(null);

  // let highScore = 0;

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=12")
      .then((response) => response.json())
      .then((data) => setCardList(data.results));
  }, []);

  // console.log(cardList);

  const handleCardClick = (e) => {
    // console.log(e.currentTarget.id);
    if (!clickedCardList.includes(e.currentTarget.id)) {
      // do below only on unique click
      clickedCardList.push(e.currentTarget.id);
      // console.log(clickedCardList);

      // shuffle and rerender cards
      let shuffledArray = cardList.sort((a, b) => 0.5 - Math.random());
      // console.log(shuffledArray);
      setCardList(() => {
        return [...shuffledArray];
      });

      // set current score
      setCurrentScore(currentScore + 1);
      // set hight score
      if (currentScore == highScore || highScore == 0) {
        setHighScore(highScore + 1);
      }
    } else {
      // on non unique card click
      // set score 0
      setCurrentScore(0);
      // reset the card order
      let sortedList = cardList.sort((a, b) => a.id - b.id);
      setCardList(() => {
        return [...sortedList];
      });

      // empty clickedCardList array
      clickedCardList = [];
    }
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
      {cardList && (
        <CardContainer cardList={cardList} handleClick={handleCardClick} />
      )}
      {/* TODO: Game Start Container */}
      {/* TODO: Game End Container */}
    </>
  );
}

export default App;
