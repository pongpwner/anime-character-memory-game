import React from "react";

import { render, screen } from "@testing-library/react";
import Timer from "./timer";
test("renders timer", () => {
  let obj = {
    time: 10,
    setTime: jest.fn(),
    delay: null,
    setDelay: jest.fn(),
    setGameOver: jest.fn(),
    setWaifu: jest.fn(),
  };
  render(
    <Timer
      time={obj.time}
      setTime={obj.setTime}
      delay={obj.delay}
      setDelay={obj.setDelay}
      setGameOver={obj.setGameOver}
      setWaifu={obj.setWaifu}
    ></Timer>
  );
  const timer = screen.getByText(/10/);
  expect(timer).toBeInTheDocument();
  expect(timer).toHaveClass("timer");
});
