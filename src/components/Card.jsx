import { useState, useEffect } from "react";

function Card({ name, url, handleClick }) {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setImgSrc(data.sprites.other.dream_world.front_default));
  }, [url]);

  return (
    <div className="cards" id={name} onClick={handleClick}>
      {imgSrc && <img src={imgSrc} alt="" />}
      <p className="card-name">{name}</p>
    </div>
  );
}

export default Card;
