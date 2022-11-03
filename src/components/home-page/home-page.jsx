import React from "react";
import { useNavigate } from "react-router-dom";
import "./home-page.styles.scss";

const HomePage = ({
  setGender,
  setBoardSize,
  restartGame,
  boardSize,
  gender,
  highscores,
}) => {
  //todo male female or both
  //size small or large
  //view high scores
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <h1>Anime Character Memory Game</h1>
      <div className="instructions-container">
        <h2>Objective</h2>
        <div className="instructions">
          Try to click each tile without clicking the same one twice.
        </div>
        <h2 className="instructions">Rules</h2>
        <ul className="instruction-list">
          <li className="instructions">
            You lose if you let the timer run out, or if you click the same
            waifu twice.
          </li>
          <li className="instructions">
            The time left will be added to your score after every sucessful
            pick.
          </li>
          <li className="instructions">
            Every 10 you pick correctly you will get 100 bonus points.
          </li>
          <li className="instructions">
            If you pick everything correctly you get 50% bonus of your current
            points.
          </li>
        </ul>
      </div>
      <h2>Settings</h2>
      <form
        className="settings"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/play");
          restartGame();
        }}
      >
        <div className="form-row" onChange={(e) => setGender(e.target.value)}>
          <div className="label">character pool gender:</div>
          <input
            type="radio"
            id="both"
            value="both"
            name="gender"
            checked={gender === "both"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="both">both</label>

          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">female</label>

          <input
            type="radio"
            id="male"
            value="male"
            name="gender"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">male</label>
        </div>

        <div
          className="form-row"
          //onChange={(e) => setBoardSize(e.target.value)}
        >
          <div className="label">board size:</div>
          <input
            type="radio"
            id="small"
            value="18"
            name="board-size"
            onChange={(e) => setBoardSize(e.target.value)}
            checked={boardSize === "18"}
          />
          <label htmlFor="small">small</label>

          <input
            type="radio"
            id="large"
            value="32"
            name="board-size"
            checked={boardSize === "32"}
            onChange={(e) => setBoardSize(e.target.value)}
          />
          <label htmlFor="large">large</label>
        </div>

        <button type="submit">Play</button>
      </form>

      <div className="highscores">
        <h2>Highscores:</h2>
        {highscores[0]
          ? highscores.map((score) => <div className="score">{score}</div>)
          : null}
      </div>
    </div>
  );
};

export default HomePage;
