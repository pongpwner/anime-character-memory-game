import React from "react";
import WAIFUS from "../../data/waifus";
import "./game-over.styles.scss";
const GameOver = ({ best, score, handleClick, count }) => {
  return (
    <div className="game-over">
      <div className="modal-container">
        <div className="best-score">Best:{best}</div>
        <div className="score">You Scored:{score}</div>
        {count === WAIFUS.length ? <div>You remembered everyone!</div> : null}
        <button onClick={handleClick}>Play Again</button>
      </div>
    </div>
  );
};

export default GameOver;
