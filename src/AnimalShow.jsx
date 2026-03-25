import "./AnimalShow.css";

import { useState } from "react";

// Importojmi SVG-të për secilin lloj kafshe
import bird from "./assets/bird.svg";
import cat from "./assets/cat.svg";
import cow from "./assets/cow.svg";
import dog from "./assets/dog.svg";
import gator from "./assets/gator.svg";
import horse from "./assets/horse.svg";
import heart from "./assets/heart.svg";

// Krijojmë një objekt që lidh emrin e kafshës me SVG-në përkatëse
const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="animal-show" onClick={handleClick}>
      <img className="animal" alt="animal" src={svgMap[type]} />
      <img
        className="heart"
        alt="heart"
        src={heart}
        style={{ width: 10 + 10 * clicks + "px" }}
      />
    </div>
  );
};

export default AnimalShow;
