import { useState, useEffect } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

let clickedCardList = [];

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cardList, setCardList] = useState(null);
  const [gameCount, setGameCount] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=12")
      .then((response) => response.json())
      .then((data) => setCardList(data.results));
  }, [gameCount]);

  // console.log(clickedCardList);

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
      // empty the card list to show game end message
      setCardList(null);
    }

    // if player guesses all correctly
    if (clickedCardList.length == 12) {
      setCardList(null);
      // clickedCardList = [];
    }
  };

  function playAgain() {
    setCurrentScore(0);
    // increases gameCount to trigger useEffect rerender
    setGameCount(gameCount + 1);
    // empty clickedCardList
    clickedCardList = [];
  }

  return (
    <>
      <h1>Project: Memory Card</h1>
      <div className="scores">
        <p className="current-score">Score: {currentScore}</p>
        <p className="hight-score">High score: {highScore}</p>
      </div>

      {cardList ? (
        <CardContainer cardList={cardList} handleClick={handleCardClick} />
      ) : (
        <>
          {clickedCardList.length == 12 ? (
            <h1>You win!!</h1>
          ) : (
            <h1>Game Over</h1>
          )}
          <p>Your score {currentScore}</p>
          <button className="play-again" onClick={playAgain}>
            Play Again
          </button>
        </>
      )}
    </>
  );
}

export default App;
