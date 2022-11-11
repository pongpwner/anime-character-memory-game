//import WAIFUS from "../../data/waifus";
import React, { useEffect, useState } from "react";
import { characterT } from "../../data/characters";
import CharacterCard from "../character-card/character-card";
import { shuffle } from "../../utils";
//import "./game-board.styles.scss";
import styled from "styled-components";

const Ul = styled("ul")<{ boardSize: string }>`
margin: 0 auto;
display: grid;
gap: 10px;
list-style-type: none;
grid-template-columns: ${(props) =>
  props.boardSize === "18"
    ? "1fr 1fr 1fr 1fr 1fr 1fr;"
    : "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;"}
width: ${(props) => (props.boardSize === "18" ? "120rem;" : "152rem;")}
`;
interface GameBoardProps {
  characters: characterT[];
  handleClick: Function;
  firstLoad: boolean;
  setFirstLoad: Function;
  boardSize: string;
}
const GameBoard = ({
  characters,
  handleClick,
  firstLoad,
  setFirstLoad,
  boardSize,
}: GameBoardProps) => {
  const [shuffledCharacters, setShuffledCharacters] = useState(characters);

  useEffect(() => {
    //shuffle waifu array
    if (!firstLoad) {
      let shuffledArr = shuffle(characters);
      setShuffledCharacters(shuffledArr);
    } else {
      setFirstLoad(false);
    }
  }, [characters]);

  return (
    <Ul boardSize={boardSize}>
      {shuffledCharacters.map((char) => {
        return (
          <CharacterCard
            key={char.id}
            name={char.name}
            imageURL={char.imageURL}
            handleClick={() => handleClick(char.id)}
            gender={char.gender}
          ></CharacterCard>
        );
      })}
    </Ul>
  );
};
export default GameBoard;
