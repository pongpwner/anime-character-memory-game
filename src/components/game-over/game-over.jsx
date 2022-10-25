import React from "react";
import WAIFUS from "../../data/waifus";
import "./game-over.styles.scss";
const GameOver = ({ best, score, handleClick, count, waifu }) => {
  return (
    <div className="game-over">
      <div className="modal-container">
        <div className="best-score">Best:{best}</div>
        <div className="score">You Scored:{score}</div>
        {count === WAIFUS.length ? <div>You remembered everyone!</div> : null}

        {waifu ? (
          <div>{waifu.name} caught you looking twice</div>
        ) : (
          <div>You were too indecisive</div>
        )}
        {waifu ? (
          <img className="waifu" src={waifu.imageURL} alt={waifu.imageURL} />
        ) : null}
        <button onClick={handleClick}>Play Again</button>
      </div>
    </div>
  );
};

export default GameOver;
