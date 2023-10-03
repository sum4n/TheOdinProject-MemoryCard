function Card({ num, handleClick }) {
  return (
    <div className="cards" id={num} onClick={handleClick}>
      <img src="#" alt="" />
      <p>Card Description</p>
      <p>{num}</p>
    </div>
  );
}

export default Card;
