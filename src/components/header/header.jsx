import "./header.styles.scss";
import ScoreBoard from "../score-board/score-board";
import Timer from "../timer/timer";

//todo: add score board
const Header = ({
  score,
  bestScore,
  time,
  setTime,
  delay,
  setDelay,
  setGameOver,
}) => {
  return (
    <header className="header">
      <div className="title">
        <h1>Waifu Memory Game</h1>
        <div className="instructions">Do not click the same waifu twice</div>
      </div>
      <Timer
        score={score}
        time={time}
        setTime={setTime}
        delay={delay}
        setDelay={setDelay}
        setGameOver={setGameOver}
      ></Timer>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
    </header>
  );
};

export default Header;
