import React from "react";
import WAIFUS from "../../data/waifus";
import "./game-over.styles.scss";
const GameOver = ({ best, score, handleClick, count, waifu, win }) => {
  let lose = (
    <div className="game-over">
      <div className="modal-container">
        <div className="best-score">Best:{best}</div>
        <div className="score">You Scored:{score}</div>

        {waifu ? (
          <div>{waifu.name} looking twice as nice</div>
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

  let winner = (
    <div className="game-over ">
      <div className="modal-container win">
        <h2>Congratulations!</h2>

        <div className="best-score">Best:{best}</div>
        <div className="score">You Scored:{score}</div>

        <div>You remembered everyone!</div>

        <button onClick={handleClick}>Play Again</button>
      </div>
    </div>
  );
  return win ? winner : lose;
};

export default GameOver;
