import React from "react";

import styled from "styled-components";
const Div = styled.div`
  font-size: 3rem;
`;
interface ScoreBoardProps {
  score: number;
}
const ScoreBoard = ({ score }: ScoreBoardProps) => {
  return <Div role="status">Score:{score}</Div>;
};

export default ScoreBoard;
