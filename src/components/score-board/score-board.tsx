import React from "react";
import "./score-board.styles.scss";
interface ScoreBoardProps {
  score: number;
}
const ScoreBoard = ({ score }: ScoreBoardProps) => {
  return (
    <div className="score-board" role="status">
      <span className="score">Score:{score}</span>
    </div>
  );
};

export default ScoreBoard;
