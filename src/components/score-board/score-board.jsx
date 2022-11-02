import React from "react";
import "./score-board.styles.scss";
const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board" role="status">
      <span className="score">Score:{score}</span>
    </div>
  );
};

export default ScoreBoard;
