//import WAIFUS from "../../data/waifus";
import React, { useEffect, useState } from "react";
import WaifuCard from "../waifu-card/waifu-card";
import { shuffle } from "../../utils";
import "./game-board.styles.scss";
import WAIFUS from "../../data/waifus";
const GameBoard = ({ waifus, handleClick, firstLoad, setFirstLoad }) => {
  const [shuffledWaifus, setShuffledWaifus] = useState(waifus);
  useEffect(() => {
    //shuffle waifu array
    if (!firstLoad) {
      let shuffledArr = shuffle(waifus);
      setShuffledWaifus(shuffledArr);
    } else {
      setFirstLoad(false);
    }
  }, [waifus]);
  return (
    <div className="game-board">
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
