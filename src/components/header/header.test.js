import React from "react";
import Header from "../header";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

test("header renders", () => {
  let obj = {
    score: 0,
    bestScore: 0,
    time: 10,
    setTime: jest.fn(),
    delay: null,
    setDelay: jest.fn(),
    setGameOver: jest.fn(),
    setWaifu: jest.fn(),
  };
  render(
    <Header
      score={obj.score}
      bestScore={obj.bestScore}
      time={obj.time}
      setTime={obj.setTime}
      delay={obj.delay}
      setDelay={obj.setDelay}
      setGameOver={obj.setGameOver}
      setWaifu={obj.setWaifu}
    ></Header>
  );
  const header = (screen.getByRole = "header");
  expect(header).toBeInTheDocument();
});
