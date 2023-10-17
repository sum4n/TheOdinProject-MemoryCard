function Card({ num, handleClick }) {
  let url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg`;
  // let name = https://pokeapi.co/api/v2/pokemon/${num}/;
  return (
    <div className="cards" id={num} onClick={handleClick}>
      <img src={url} alt="" />
      {/* <p>{name}</p> */}
      <p>{num}</p>
    </div>
  );
}

export default Card;
