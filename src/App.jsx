import { useState, useEffect } from "react";
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
  { id: 9, num: "9" },
  { id: 10, num: "10" },
  { id: 11, num: "11" },
  { id: 12, num: "12" },
];

// let listPic;

async function picList() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=12", {
    mode: "cors",
  });
  const picData = await response.json();
  // console.log(picData.results);
  // listPic = picData.results;
  // console.log(listPic);
  return picData.results;
}
console.log(picList());
let asc = picList();
console.log(asc);
// console.log(listPic);

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

  console.log(cardList);

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
      {/* <div>{cardList && cardList.map((card) => <p> {card.name} </p>)}</div> */}
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
