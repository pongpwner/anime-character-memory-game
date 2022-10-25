import React, { useEffect } from "react";
import { useInterval } from "../../utils";
const Timer = ({ time, setTime, delay, setDelay }) => {
  useInterval(() => {
    setTime(time - 1);
  }, delay);

  useEffect(() => {
    if (time === 0) {
      setDelay(null);
      alert("game Over");
    }
  }, [time]);

  return <div className="timer">timer:{time}</div>;
};

export default Timer;
