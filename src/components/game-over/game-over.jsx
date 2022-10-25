import React from "react";
import WAIFUS from "../../data/waifus";
import "./game-over.styles.scss";
const GameOver = ({ best, score, handleClick, count, waifu, win }) => {
  let lose = (
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
            Every 10 you pick correctly you will get 100 bonus points.
          </div>
          <div className="instructions">
            If you pick everything correctly you get 50% bonus of your current
            points.
          </div>
        </div>

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
        <div className="instruction-container">
          <h2>Congratulations!</h2>
        </div>

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
