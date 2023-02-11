import React from "react";
import GameBoard from "./game-board";
import { FEMALES } from "../../data/characters";
import { render, screen } from "@testing-library/react";

test("gameboard contains 32 items", () => {
  let props = {
    characters: FEMALES,
    handleClick: Function,
    firstLoad: true,
    setFirstLoad: Function,
    boardSize: "32",
  };
  render(
    <GameBoard
      characters={props.characters}
      handleClick={props.handleClick}
      firstLoad={props.firstLoad}
      setFirstLoad={props.setFirstLoad}
      boardSize={props.boardSize}
    ></GameBoard>
  );
  const gameboard = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");
  expect(gameboard).toBeInTheDocument();

  expect(listItems.length).toEqual(32);
});
