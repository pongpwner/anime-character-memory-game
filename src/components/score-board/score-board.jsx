import React from "react";

const ScoreBoard = ({ score, bestScore }) => {
  return (
    <div className="score-board">
      <span className="score">Score:{score}</span>
      <span className="divider">{` | `}</span>
      <span className="best-score">Best:{bestScore}</span>
    </div>
  );
};

export default ScoreBoard;
