import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/header";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="App">
      <Header score={score} bestScore={bestScore}></Header>
    </div>
  );
}

export default App;
