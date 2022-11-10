import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { MALES, FEMALES, characterT } from "./data/characters";
import Header from "./components/header/header";
import GameBoard from "./components/game-board/game-board";
import GameOver from "./components/game-over/game-over";
import wow from "./assets/sounds/wow.mp3";
import bonk from "./assets/sounds/bonk.mp3";
import higher from "./assets/sounds/higher.mp3";
import boing1 from "./assets/sounds/boing1.mp3";
import boing2 from "./assets/sounds/boing2.mp3";
import boing3 from "./assets/sounds/boing3.mp3";
import { randomNumber, getRandomSubarray } from "./utils";
import HomePage from "./components/home-page/home-page";

function App() {
  const [characters, setCharacters] = useState<characterT[]>(
    FEMALES.map((char) => char)
  );
  const [score, setScore] = useState<number>(0);
  const [highscores, setHighscores] = useState<number[]>([0]);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [time, setTime] = useState<number>(10);
  //1000 for 1 second countdown and null to pause timer
  const [delay, setDelay] = useState<number | null>(null);
  const [count, setCount] = useState<number>(1);
  const [character, setCharacter] = useState<characterT | null>(null);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  //checks if player got everything correct
  const [win, setWin] = useState<boolean>(false);
  const [gender, setGender] = useState<"female" | "male" | "both">("both");
  const [boardSize, setBoardSize] = useState<string>("32");
  const wowSound = new Audio(wow);
  const bonkSound = new Audio(bonk);
  const higherSound = new Audio(higher);
  const boing1Sound = new Audio(boing1);
  const boing2Sound = new Audio(boing2);
  const boing3Sound = new Audio(boing3);

  wowSound.volume = 0.7;
  //base state of game called when going to home page
  const resetGame = () => {
    setFirstLoad(true);
    setScore(0);
    setCount(1);
    setWin(false);
    setGameOver(false);
    setTime(10);
    setDelay(null);
  };

  //starts the game with current settings when hitting play again
  const restartGame = () => {
    let reset: characterT[] = [];
    if (gender === "female") {
      reset = FEMALES.map((char) =>
        Object.assign({}, char, { selected: false })
      );
    }
    if (gender === "male") {
      reset = MALES.map((char) => Object.assign({}, char, { selected: false }));
    }
    if (gender === "both") {
      reset = [...FEMALES, ...MALES].map((char) =>
        Object.assign({}, char, { selected: false })
      );
    }
    //setWaifus(reset);
    //console.log(WAIFUS);
    setCharacters(getRandomSubarray(reset, boardSize));
    setScore(0);
    setCount(1);
    setWin(false);
    setGameOver(false);
    setTime(10);
    setDelay(1000);
  };
  //win the game
  useEffect(() => {
    if (characters) {
      if (count === characters.length + 1) {
        higherSound.play();
        setDelay(null);
        setScore(Math.ceil(score * 1.5));
        setWin(true);
        setGameOver(true);
      }
    }
  }, [count]);

  useEffect(() => {
    // set the waifus array with a custom array
    if (gender === "female") {
      setCharacters(
        getRandomSubarray(
          FEMALES.map((char) => char),
          boardSize
        )
      );
    }
    if (gender === "male") {
      setCharacters(
        getRandomSubarray(
          MALES.map((char) => char),
          boardSize
        )
      );
    }
    if (gender === "both") {
      setCharacters(
        getRandomSubarray(
          [...FEMALES, ...MALES].map((char) => char),
          boardSize
        )
      );
    }
  }, []);

  //retreive highscores from localstorage
  useEffect(() => {
    const localHighscores = JSON.parse(
      localStorage.getItem("highscores") as string
    );
    if (localHighscores) {
      setHighscores(localHighscores);
    } else {
      setHighscores([0]);
    }
  }, []);

  //when waifu card is clicked
  let clickCharacter = (id: number) => {
    let tempArr = characters.map((char) => char);

    tempArr.forEach((char) => {
      if (char.id === id) {
        //success
        if (char.selected === false) {
          char.selected = true;

          setCount(count + 1);
          if (count % 10 === 0 && count !== 0) {
            wowSound.play();

            setScore(score + 100 + time);
            setTime(10);
          } else {
            //play boing sound
            let soundNumber = randomNumber(1, 3);

            switch (soundNumber) {
              case 1:
                boing1Sound.play();
                break;
              case 2:
                boing2Sound.play();
                break;
              case 3:
                boing3Sound.play();
                break;
              default:
                break;
            }

            setScore(score + time);
            setTime(10);
            setDelay(1000);
          }
        } else {
          bonkSound.play();
          setDelay(null);
          //sussy
          setCharacter(char);
          setGameOver(true);
        }
      }
    });
    //console.log(tempArr);
    setCharacters(tempArr);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          score={score}
          time={time}
          setTime={setTime}
          delay={delay}
          setDelay={setDelay}
          setGameOver={setGameOver}
          setCharacter={setCharacter}
          resetGame={resetGame}
        ></Header>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setGender={setGender}
                setBoardSize={setBoardSize}
                restartGame={restartGame}
                boardSize={boardSize}
                gender={gender}
                highscores={highscores}
              />
            }
          />
          <Route
            path="/play"
            element={
              <GameBoard
                characters={characters}
                handleClick={clickCharacter}
                firstLoad={firstLoad}
                setFirstLoad={setFirstLoad}
                boardSize={boardSize}
              ></GameBoard>
            }
          />
        </Routes>
      </BrowserRouter>

      {gameOver ? (
        <GameOver
          score={score}
          highscores={highscores}
          count={count}
          handleClick={restartGame}
          character={character}
          win={win}
          setHighscores={setHighscores}
        ></GameOver>
      ) : null}
    </div>
  );
}

export default App;
