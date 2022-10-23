import React, { useEffect, useState } from "react";
import "./App.scss";
import WAIFUS from "./data/waifus";
import Header from "./components/header/header";
import GameBoard from "./components/game-board/game-board";
function App() {
  const [waifus, setWaifus] = useState(WAIFUS);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  //reset the game
  useEffect(() => {
    if (gameOver === true) {
      let reset = waifus.map((waifu) =>
        Object.assign({}, waifu, { selected: false })
      );

      setWaifus(reset);
      setGameOver(false);
      setScore(0);
    }
  }, [gameOver]);
  //update best score
  useEffect(() => {
    if (bestScore < score) {
      setBestScore(score);
    }
  }, [score]);
  let clickWaifu = (id) => {
    console.log("click");
    let tempArr = waifus.map((waifu) => waifu);
    let tempWaifu = tempArr.find((waifu) => waifu.id === id);
    tempArr.forEach((waifu) => {
      if (waifu.id === id) {
        if (waifu.selected === false) {
          console.log("false");
          waifu.selected = true;
          setScore(score + 1);
        } else {
          alert("game over");
          setGameOver(true);
        }
      }
    });
    console.log(tempArr);
    setWaifus(tempArr);
  };
  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}></Header>
      <GameBoard waifus={waifus} handleClick={clickWaifu}></GameBoard>
    </div>
  );
}

export default App;
