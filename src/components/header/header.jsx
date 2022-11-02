import "./header.styles.scss";
import ScoreBoard from "../score-board/score-board";
import Timer from "../timer/timer";
import { useNavigate } from "react-router-dom";

//todo: add score board

const Header = ({
  score,

  time,
  setTime,
  delay,
  setDelay,
  setGameOver,
  setWaifu,
  resetGame,
}) => {
  const navigate = useNavigate();
  return (
    <header
      className="header"
      onClick={() => {
        resetGame();
        navigate("/");
      }}
    >
      <h1>Waifu Memory Game</h1>

      <Timer
        score={score}
        time={time}
        setTime={setTime}
        delay={delay}
        setDelay={setDelay}
        setGameOver={setGameOver}
        setWaifu={setWaifu}
      ></Timer>
      <ScoreBoard score={score}></ScoreBoard>
    </header>
  );
};

export default Header;
