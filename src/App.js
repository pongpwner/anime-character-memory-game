import React, { useState } from "react";
import "./App.scss";
import WAIFUS from "./data/waifus";
import Header from "./components/header/header";
import GameBoard from "./components/game-board/game-board";
function App() {
  const [waifus, setWaifus] = useState(WAIFUS);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}></Header>
      <GameBoard waifus={waifus}></GameBoard>
    </div>
  );
}

export default App;
