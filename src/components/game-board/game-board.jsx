//import WAIFUS from "../../data/waifus";
import React, { useEffect, useState } from "react";
import WaifuCard from "../waifu-card/waifu-card";
import { shuffle } from "../../utils";
import "./game-board.styles.scss";
const GameBoard = ({ waifus, handleClick }) => {
  const [shuffledWaifus, setShuffledWaifus] = useState(waifus);
  useEffect(() => {
    console.log("update");
    //shuffle waifu array
    let shuffledArr = shuffle(waifus);
    setShuffledWaifus(shuffledArr);
  }, [waifus]);
  return (
    <div className="game-board">
      {console.log(shuffledWaifus)}
      {console.log(waifus)}
      {shuffledWaifus.map((waifu) => {
        return (
          <WaifuCard
            key={waifu.id}
            name={waifu.name}
            imageURL={waifu.imageURL}
            handleClick={() => handleClick(waifu.id)}
          ></WaifuCard>
        );
      })}
    </div>
  );
};
export default GameBoard;
