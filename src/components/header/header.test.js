import React from "react";
import Header from "./header";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
test("header renders", () => {
  let obj = {
    score: 0,
    bestScore: 0,
    time: 10,
    setTime: jest.fn(),
    delay: null,
    setDelay: jest.fn(),
    setGameOver: jest.fn(),
    setCharacter: jest.fn(),
    resetGame: jest.fn(),
  };
  render(
    <BrowserRouter>
      <Header
        score={obj.score}
        time={obj.time}
        setTime={obj.setTime}
        delay={obj.delay}
        setDelay={obj.setDelay}
        setGameOver={obj.setGameOver}
        setCharacter={obj.setCharacter}
        resetGame={obj.resetGame}
      ></Header>
    </BrowserRouter>
  );
  const header = screen.getByTestId("header");

  expect(header).toBeInTheDocument();
});
