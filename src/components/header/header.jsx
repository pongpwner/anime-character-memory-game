import "./header.styles.scss";
import ScoreBoard from "../score-board/score-board";

//todo: add score board
const Header = ({ score, bestScore }) => {
  return (
    <header className="header">
      <div className="title">
        <h1>Waifu Memory Game</h1>
        <div className="instructions">Do not click the same waifu twice</div>
      </div>

      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
    </header>
  );
};

export default Header;
