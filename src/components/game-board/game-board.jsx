//import WAIFUS from "../../data/waifus";
import React, { useEffect, useState } from "react";
import WaifuCard from "../waifu-card/waifu-card";
import { shuffle } from "../../utils";
import "./game-board.styles.scss";
import WAIFUS from "../../data/waifus";
const GameBoard = ({
  waifus,
  handleClick,
  firstLoad,
  setFirstLoad,
  boardSize,
}) => {
  const [shuffledWaifus, setShuffledWaifus] = useState(waifus);
  const [boardSizeClass, setBoardSizeClass] = useState("large");
  useEffect(() => {
    //shuffle waifu array
    if (!firstLoad) {
      let shuffledArr = shuffle(waifus);
      setShuffledWaifus(shuffledArr);
    } else {
      setFirstLoad(false);
    }
  }, [waifus]);
  useEffect(() => {
    if (boardSize === "18") {
      setBoardSizeClass("small");
    }
    if (boardSize === "32") {
      setBoardSizeClass("large");
    }
  }, [boardSize]);
  return (
    <ul className={`game-board ${boardSizeClass}`}>
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
    </ul>
  );
};
export default GameBoard;
