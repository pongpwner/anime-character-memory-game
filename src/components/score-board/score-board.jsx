import React from "react";
import "./score-board.styles.scss";
const ScoreBoard = ({ score, bestScore }) => {
  return (
    <div className="score-board" role="status">
      <span className="score">Score:{score}</span>
      <span className="divider">{` | `}</span>
      <span className="score best">Best:{bestScore}</span>
    </div>
  );
};

export default ScoreBoard;
