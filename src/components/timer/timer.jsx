import React, { useEffect } from "react";
import { useInterval } from "../../utils";
import "./timer.styles.scss";
const Timer = ({ time, setTime, delay, setDelay, setGameOver, setWaifu }) => {
  useInterval(() => {
    setTime(time - 1);
  }, delay);

  useEffect(() => {
    if (time === 0) {
      setDelay(null);
      setWaifu(null);
      setGameOver(true);
    }
  }, [time]);

  return <div className="timer">Time Left:{time}</div>;
};

export default Timer;
