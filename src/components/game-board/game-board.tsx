//import WAIFUS from "../../data/waifus";
import React, { useEffect, useState } from "react";
import { characterT } from "../../data/characters";
import CharacterCard from "../character-card/character-card";
import { shuffle } from "../../utils";
import "./game-board.styles.scss";

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
  const [boardSizeClass, setBoardSizeClass] = useState("large");
  useEffect(() => {
    //shuffle waifu array
    if (!firstLoad) {
      let shuffledArr = shuffle(characters);
      setShuffledCharacters(shuffledArr);
    } else {
      setFirstLoad(false);
    }
  }, [characters]);
  useEffect(() => {
    if (boardSize === "18") {
      setBoardSizeClass("small");
    }
    if (boardSize === "32") {
      setBoardSizeClass("large");
    }
  }, [boardSize]);
  return (
    <ul className={`game-board ${boardSizeClass}`}>
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
    </ul>
  );
};
export default GameBoard;
