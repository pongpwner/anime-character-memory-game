import React, { useState } from "react";
import "./App.scss";
import WAIFUS from "./data/waifus";
import Header from "./components/header/header";
import GameBoard from "./components/game-board/game-board";
function App() {
  const [waifus, setWaifus] = useState(WAIFUS);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  let clickWaifu = (id) => {
    console.log("click");
    let tempArr = waifus.map((waifu) => waifu);
    let tempWaifu = tempArr.find((waifu) => waifu.id === id);
    tempArr.forEach((waifu) => {
      if (waifu.id === id) {
        if (waifu.selected === false) {
          console.log("false");
          waifu.selected = true;
        } else {
          alert("game over");
        }
      }
    }, tempArr);
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
