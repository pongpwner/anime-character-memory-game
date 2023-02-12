import { getByTestId, render, screen } from "@testing-library/react";
import { FEMALES } from "../../data/characters";
import HomePage from "./home-page";
import { BrowserRouter } from "react-router-dom";

test("homepage renders", () => {
  let props = {
    setGender: Function,
    setBoardSize: Function,
    restartGame: Function,
    boardSize: "32",
    gender: "female",
    highscores: [10],
  };
  render(
    <BrowserRouter>
      <HomePage
        setGender={props.setGender}
        setBoardSize={props.setBoardSize}
        restartGame={props.restartGame}
        boardSize={props.boardSize}
        gender={props.gender}
        highscores={props.highscores}
      />
    </BrowserRouter>
  );
  let container = screen.getByTestId("container");
  expect(container).toBeInTheDocument();
});
