import React, { useEffect, useState } from "react";
import "./App.scss";
import WAIFUS from "./data/waifus";
import Header from "./components/header/header";
import GameBoard from "./components/game-board/game-board";
import GameOver from "./components/game-over/game-over";
function App() {
  const [waifus, setWaifus] = useState(WAIFUS);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(10);
  const [delay, setDelay] = useState(1000);
  const [count, setCount] = useState(0);

  const restartGame = () => {
    let reset = waifus.map((waifu) =>
      Object.assign({}, waifu, { selected: false })
    );
    setWaifus(reset);
    setScore(0);
    setCount(0);
    setGameOver(false);
    setTime(10);
    setDelay(1000);
  };
  //reset the game
  useEffect(() => {
    if (count === WAIFUS.length) {
      setDelay(null);
      setScore(score + WAIFUS.length * 10);
      setGameOver(true);
    }
  }, [count]);
  //update best score
  useEffect(() => {
    if (bestScore < score) {
      setBestScore(score);
    }
  }, [score]);
  let clickWaifu = (id) => {
    console.log(gameOver);
    console.log("click");
    let tempArr = waifus.map((waifu) => waifu);

    tempArr.forEach((waifu) => {
      if (waifu.id === id) {
        if (waifu.selected === false) {
          console.log("false");
          waifu.selected = true;
          setCount(count + 1);
          setScore(score + time);
          setTime(10);
          setDelay(1000);
        } else {
          setDelay(null);
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
      ></Header>
      <GameBoard waifus={waifus} handleClick={clickWaifu}></GameBoard>

      {gameOver ? (
        <GameOver
          score={score}
          best={bestScore}
          count={count}
          handleClick={restartGame}
        ></GameOver>
      ) : null}
    </div>
  );
}

export default App;
