import React from "react";

import { render, screen } from "@testing-library/react";
import { FEMALES } from "../../data/characters";
import GameOver from "./game-over";

test("render loss", () => {
  let props = {
    score: 10,
    handleClick: Function,
    count: 1,
    character: FEMALES[0],
    win: false,
    highscores: [10],
    setHighscores: Function,
  };
  render(
    <GameOver
      score={props.score}
      handleClick={props.handleClick}
      count={props.count}
      character={props.character}
      win={props.win}
      highscores={props.highscores}
      setHighscores={props.setHighscores}
    />
  );
  let score = screen.getByText("10");
  expect(score).toBeInTheDocument();
});
