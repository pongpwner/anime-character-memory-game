import { useEffect } from "react";
import styled from "styled-components";
//import "./game-over.styles.scss";
import { characterT } from "../../data/characters";
//style variables
const borderColor = "black";
const backgroundColor1 = "rgb(214, 214, 214)";
const backgroundColor2 = "gold";
const buttonColor1 = "white";
const buttonColor2 = "black";

const Heading2 = styled.h2`
  font-size: 2rem;
`;
const Background = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Modal = styled("div")<{ win: boolean }>`
  padding: 2rem;
  border-radius: 10px;
  border: 3px solid ${borderColor};
  font-size: 3rem;
  font-weight: 700;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) =>
    props.win ? backgroundColor2 : backgroundColor1};
  width: 60rem;
  height: 60rem;
`;
const HighScores = styled.ul`
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
  li:nth-child(2) {
    color: red;
  }
`;
interface LoseProps {
  score: number;

  count: number;
  character: characterT | null;
}
interface WinProps {
  score: number;
}
const Image = styled.img`
  width: 20rem;
  height: 25rem;
`;
const Lose = ({ character, score, count }: LoseProps) => {
  return (
    <>
      <div className="score">You Scored:{score}</div>
      <div className="score">You got {count - 1} correctly</div>
      {character ? (
        <div>{character.name} bonked you</div>
      ) : (
        <div>You were too indecisive</div>
      )}
      {character ? (
        <Image
          className="waifu"
          src={character.imageURL}
          alt={character.imageURL}
        />
      ) : null}
    </>
  );
};

const Win = ({ score }: WinProps) => {
  return (
    <>
      <div className="score">You Scored:{score}</div>
      <h2>Congratulations!</h2>
      <div>You remembered everyone!</div>
    </>
  );
};
const PlayAgain = styled.button`
  width: 50%;
  background-color: ${buttonColor1};
  color: $button-color2;
  border-color: ${buttonColor2};
  border: 2px solid;
  :hover {
    cursor: pointer;
    background-color: ${buttonColor2};
    color: ${buttonColor1};
  }
`;

interface GameBoardProps {
  score: number;
  handleClick: Function;
  count: number;
  character: characterT | null;
  win: boolean;
  highscores: number[];
  setHighscores: Function;
}
const GameOver = ({
  score,
  handleClick,
  count,
  character,
  win,
  highscores,
  setHighscores,
}: GameBoardProps) => {
  //check score with highscores
  useEffect(() => {
    //create util function check highscores
    let temp = highscores.map((hs) => hs);
    temp.push(score);
    temp.sort(function (a, b) {
      return b - a;
    });
    if (temp.length > 4) {
      temp = temp.slice(0, 4);
    }
    setHighscores(temp);
  }, []);
  //update localstorage highscores
  useEffect(() => {
    localStorage.setItem("highscores", JSON.stringify(highscores));
  }, [highscores]);
  //return win ? winner : lose;
  return (
    <Background>
      <Modal win={win}>
        <HighScores>
          <Heading2>Highscores:</Heading2>
          {highscores[0] ? highscores.map((score) => <li>{score}</li>) : null}
        </HighScores>
        {win ? (
          <Win score={score}></Win>
        ) : (
          <Lose character={character} score={score} count={count}></Lose>
        )}
        <PlayAgain onClick={() => handleClick()}>Play Again</PlayAgain>
      </Modal>
    </Background>
  );
};

export default GameOver;
