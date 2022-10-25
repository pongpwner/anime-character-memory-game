import React from "react";
import WAIFUS from "../../data/waifus";
import "./game-over.styles.scss";
const GameOver = ({ best, score, handleClick, count, waifu }) => {
  return (
    <div className="game-over">
      <div className="modal-container">
        <div className="instruction-container">
          <h2>Instructions:</h2>
          <div className="instructions">
            You lose if you let the timer run out, or if you click the same
            waifu twice.
          </div>
          <div className="instructions">
            The time left will be added to your score after every sucessful
            pick.
          </div>
          <div className="instructions">
            Picking everything correctly yeilds a large amount of bonus points.
          </div>
        </div>

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
