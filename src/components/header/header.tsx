import "./header.styles.scss";
import ScoreBoard from "../score-board/score-board";
import Timer from "../timer/timer";
import { useNavigate } from "react-router-dom";

//todo: add score board

interface HeaderProps {
  score: number;
  time: number;
  setTime: Function;
  delay: number | null;
  setDelay: Function;
  setGameOver: Function;
  setCharacter: Function;
  resetGame: Function;
}
const Header = ({
  score,
  time,
  setTime,
  delay,
  setDelay,
  setGameOver,
  setCharacter,
  resetGame,
}: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <button
        onClick={() => {
          resetGame();
          navigate("/");
        }}
      >
        Settings
      </button>

      <Timer
        time={time}
        setTime={setTime}
        delay={delay}
        setDelay={setDelay}
        setGameOver={setGameOver}
        setCharacter={setCharacter}
      ></Timer>
      <ScoreBoard score={score}></ScoreBoard>
    </header>
  );
};

export default Header;
