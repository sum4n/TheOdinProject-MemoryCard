import Card from "./Card";

function CardContainer({ cardList, handleClick }) {
  return (
    <div className="card-container">
      {cardList.map((card) => (
        <Card
          key={card.name}
          name={card.name}
          url={card.url}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}

export default CardContainer;
