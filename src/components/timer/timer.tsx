import React, { useEffect } from "react";
import { useInterval } from "../../utils";
//import "./timer.styles.scss";
import bonk from "../../assets/sounds/bonk.mp3";
import styled from "styled-components";

const Div = styled.div`
  font-size: 3rem;
`;

interface TimerProps {
  time: number;
  setTime: Function;
  delay: number | null;
  setDelay: Function;
  setGameOver: Function;
  setCharacter: Function;
}
const Timer = ({
  time,
  setTime,
  delay,
  setDelay,
  setGameOver,
  setCharacter,
}: TimerProps) => {
  const bonkSound = new Audio(bonk);
  useInterval(() => {
    setTime(time - 1);
  }, delay);

  useEffect(() => {
    if (time === 0) {
      bonkSound.play();
      setDelay(null);
      setCharacter(null);
      setGameOver(true);
    }
  }, [time]);

  return <Div role="timer">Time Left:{time}</Div>;
};

export default Timer;
