import React from "react";
import ScoreBoard from "./score-board";

import { render, screen } from "@testing-library/react";

test("score-board renders", () => {
  let score = 10;
  let bestScore = 20;
  render(<ScoreBoard score={score} bestScore={bestScore}></ScoreBoard>);

  const ScoreBoard1 = screen.getByRole("status");
  expect(ScoreBoard1).toBeInTheDocument();
  expect(ScoreBoard1).toHaveClass("score-board");
  const score1 = screen.getByText(/score/i);
  expect(score1).toHaveClass("score");
  const best1 = screen.getByText(/best/i);
  expect(best1).toHaveClass("best");
});
