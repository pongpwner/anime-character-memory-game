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
  setWaifu,
}) => {
  return (
    <header className="header">
      <div className="title">
        <h1>Waifu Memory Game</h1>
      </div>
      <Timer
        score={score}
        time={time}
        setTime={setTime}
        delay={delay}
        setDelay={setDelay}
        setGameOver={setGameOver}
        setWaifu={setWaifu}
      ></Timer>
      <ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>
    </header>
  );
};

export default Header;
