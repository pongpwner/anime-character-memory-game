//import WAIFUS from "../../data/waifus";
import React from "react";
import WaifuCard from "../waifu-card/waifu-card";
import "./game-board.styles.scss";
const GameBoard = ({ waifus }) => {
  return (
    <div className="game-board">
      {waifus.map((waifu) => {
        return (
          <WaifuCard
            key={waifu.id}
            name={waifu.name}
            imageURL={waifu.imageURL}
          ></WaifuCard>
        );
      })}
    </div>
  );
};
export default GameBoard;
