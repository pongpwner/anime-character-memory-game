import ScoreBoard from "../score-board/score-board";
import Timer from "../timer/timer";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
//todo: add score board
const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 4rem;
`;
const Settings = styled.button`
  border: none;
  font-size: 3rem;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    cursor: pointer;
  }
`;
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
    <Container>
      <Settings
        type="button"
        onClick={() => {
          resetGame();
          navigate("/");
        }}
      >
        Settings
      </Settings>

      <Timer
        time={time}
        setTime={setTime}
        delay={delay}
        setDelay={setDelay}
        setGameOver={setGameOver}
        setCharacter={setCharacter}
      ></Timer>
      <ScoreBoard score={score}></ScoreBoard>
    </Container>
  );
};

export default Header;
