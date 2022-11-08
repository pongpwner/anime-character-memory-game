import React, { useEffect } from "react";
import { useInterval } from "../../utils";
import "./timer.styles.scss";
import bonk from "../../assets/sounds/bonk.mp3";
const Timer = ({
  time,
  setTime,
  delay,
  setDelay,
  setGameOver,
  setCharacter,
}) => {
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
