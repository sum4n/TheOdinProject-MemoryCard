import Card from "./Card";

function CardContainer({ cardList, handleClick }) {
  return (
    <div className="card-container">
      {cardList.map((card) => (
        <Card key={card.id} num={card.num} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default CardContainer;
