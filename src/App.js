import React, { useEffect, useState } from "react";
import "./App.scss";
import WAIFUS from "./data/waifus";
import Header from "./components/header/header";
import GameBoard from "./components/game-board/game-board";
import GameOver from "./components/game-over/game-over";
import wow from "./assets/wow.mp3";
import bonk from "./assets/bonk.mp3";
import higher from "./assets/higher.mp3";
import boing1 from "./assets/boing1.mp3";
import boing2 from "./assets/boing2.mp3";
import boing3 from "./assets/boing3.mp3";
import { randomNumber, getRandomSubarray } from "./utils";

function App() {
  const [waifus, setWaifus] = useState(WAIFUS.map((waifu) => waifu));
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(10);
  const [delay, setDelay] = useState(1000);
  const [count, setCount] = useState(1);
  const [waifu, setWaifu] = useState(null);
  const [firstLoad, setFirstLoad] = useState(true);
  const [win, setWin] = useState(false);
  const wowSound = new Audio(wow);
  const bonkSound = new Audio(bonk);
  const higherSound = new Audio(higher);
  const boing1Sound = new Audio(boing1);
  const boing2Sound = new Audio(boing2);
  const boing3Sound = new Audio(boing3);
  let tileNum = 10;
  wowSound.volume = 0.7;
  const restartGame = () => {
    let reset = WAIFUS.map((waifu) =>
      Object.assign({}, waifu, { selected: false })
    );
    //setWaifus(reset);
    //console.log(WAIFUS);
    setWaifus(getRandomSubarray(reset, tileNum));
    setScore(0);
    setCount(1);
    setWin(false);
    setGameOver(false);
    setTime(10);
    setDelay(1000);
  };
  //win the game
  useEffect(() => {
    if (count === waifus.length + 1) {
      higherSound.play();
      setDelay(null);
      setScore(Math.ceil(score * 1.5));
      setWin(true);
      setGameOver(true);
    }
  }, [count]);
  //update best score
  useEffect(() => {
    if (bestScore < score) {
      setBestScore(score);
    }
  }, [score]);

  useEffect(() => {
    // set the waifus array with a custom array
    setWaifus(
      getRandomSubarray(
        WAIFUS.map((waifu) => waifu),
        tileNum
      )
    );
  }, []);

  //when waifu card is clicked
  let clickWaifu = (id) => {
    console.log(gameOver);
    console.log("click");
    let tempArr = waifus.map((waifu) => waifu);

    tempArr.forEach((waifu) => {
      if (waifu.id === id) {
        //success
        if (waifu.selected === false) {
          waifu.selected = true;

          setCount(count + 1);
          if (count % 10 === 0 && count !== 0) {
            wowSound.play();

            setScore(score + 100 + time);
            setTime(10);
          } else {
            //play boing sound
            let soundNumber = randomNumber(1, 3);
            console.log(soundNumber);
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

          setWaifu(waifu);
          setGameOver(true);
        }
      }
    });
    console.log(tempArr);
    setWaifus(tempArr);
  };
  return (
    <div className="App">
      <Header
        score={score}
        bestScore={bestScore}
        time={time}
        setTime={setTime}
        delay={delay}
        setDelay={setDelay}
        setGameOver={setGameOver}
        setWaifu={setWaifu}
      ></Header>
      <GameBoard
        waifus={waifus}
        handleClick={clickWaifu}
        firstLoad={firstLoad}
        setFirstLoad={setFirstLoad}
      ></GameBoard>

      {gameOver ? (
        <GameOver
          score={score}
          best={bestScore}
          count={count}
          handleClick={restartGame}
          waifu={waifu}
          win={win}
        ></GameOver>
      ) : null}
    </div>
  );
}

export default App;
