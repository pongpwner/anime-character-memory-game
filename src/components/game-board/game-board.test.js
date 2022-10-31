import React from "react";
import GameBoard from "./game-board";

import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import waifus from "../../data/waifus";
test("gameboard contains 32 items", () => {
  let mock = {
    handleClick: jest.fn(),
    firstLoad: true,
    setFirstLoad: jest.fn(),
  };
  render(
    <GameBoard
      waifus={waifus}
      handleClick={mock.clickWaifu}
      firstLoad={mock.firstLoad}
      setFirstLoad={mock.setFirstLoad}
    ></GameBoard>
  );
  const gameboard = screen.getByRole("list");
  const listItems = screen.getAllByRole("listitem");
  expect(gameboard).toBeInTheDocument();
  expect(gameboard).toHaveClass("game-board");
  expect(listItems.length).toEqual(32);
  expect(listItems[0]).toHaveClass("waifu-card");
});
