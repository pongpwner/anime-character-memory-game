import React from "react";
import { useNavigate } from "react-router-dom";
import "./home-page.styles.scss";

const HomePage = ({ setGender, setBoardSize, restartGame, boardSize }) => {
  //todo male female or both
  //size small or large
  //view high scores
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <form
        className="settings"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/play");
          restartGame();
        }}
      >
        <div className="form-row" onChange={(e) => setGender(e.target.value)}>
          <input type="radio" id="both" value="both" name="gender" />
          <label htmlFor="both">both</label>

          <input
            type="radio"
            id="female"
            value="female"
            name="gender"
            defaultChecked
          />
          <label htmlFor="female">female</label>

          <input type="radio" id="male" value="male" name="gender" />
          <label htmlFor="male">male</label>
        </div>

        <div
          className="form-row"
          //onChange={(e) => setBoardSize(e.target.value)}
        >
          <input
            type="radio"
            id="small"
            value="16"
            name="board-size"
            onChange={(e) => setBoardSize(e.target.value)}
            checked={boardSize === "16"}
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
    </div>
  );
};

export default HomePage;
