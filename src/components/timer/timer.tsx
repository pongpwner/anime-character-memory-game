import React, { useEffect } from "react";
import { useInterval } from "../../utils";
import "./timer.styles.scss";
import bonk from "../../assets/sounds/bonk.mp3";
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

  return (
    <div role="timer" className="timer">
      Time Left:{time}
    </div>
  );
};

export default Timer;
