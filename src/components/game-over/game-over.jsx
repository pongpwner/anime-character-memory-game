import React from "react";
import { useEffect } from "react";

import "./game-over.styles.scss";
const GameOver = ({
  score,
  handleClick,
  count,
  character,
  win,
  highscores,
  setHighscores,
}) => {
  //check score with highscores
  useEffect(() => {
    //create util function check highscores
    let temp = highscores.map((hs) => hs);
    temp.push(score);
    temp.sort(function (a, b) {
      return b - a;
    });
    if (temp.length > 4) {
      temp = temp.slice(0, 4);
    }
    setHighscores(temp);
  }, []);
  //update localstorage highscores
  useEffect(() => {
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }, [highscores]);
  let lose = (
    <div className="game-over">
      <div className="modal-container">
        <div className="highscores">
          <h1>Highscores:</h1>
          {highscores[0]
            ? highscores.map((score) => <div className="score">{score}</div>)
            : null}
        </div>
        <div className="score">You Scored:{score}</div>
        <div className="score">You got {count - 1} correctly</div>

        {character ? (
          <div>{character.name} bonked you</div>
        ) : (
          <div>You were too indecisive</div>
        )}
        {character ? (
          <img
            className="waifu"
            src={character.imageURL}
            alt={character.imageURL}
          />
        ) : null}
        <button onClick={handleClick}>Play Again</button>
      </div>
    </div>
  );

  let winner = (
    <div className="game-over ">
      <div className="modal-container win">
        <div className="highscores">
          <h1>Highscores:</h1>
          {highscores[0]
            ? highscores.map((score) => <div className="score">{score}</div>)
            : null}
        </div>
        <h2>Congratulations!</h2>

        <div className="score">You Scored:{score}</div>

        <div>You remembered everyone!</div>

        <button onClick={handleClick}>Play Again</button>
      </div>
    </div>
  );
  return win ? winner : lose;
};

export default GameOver;
