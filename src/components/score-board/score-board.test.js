import React from "react";
import ScoreBoard from "./score-board";

import { render, screen } from "@testing-library/react";

test("score-board renders", () => {
  let score = 10;

  render(<ScoreBoard score={score}></ScoreBoard>);

  const ScoreBoard1 = screen.getByRole("status");
  expect(ScoreBoard1).toBeInTheDocument();
});
