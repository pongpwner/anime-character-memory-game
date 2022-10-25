import React, { useState, useEffect } from "react";

const Timer = () => {
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(10);
  useEffect(() => {
    countDown();
  }, []);
  useEffect(() => {
    console.log(time);
  }, [time]);
  function countDown() {
    let sec = 10;
    let timer = setInterval(function () {
      setTime(sec);
      sec--;
      //onsole.log(time);
      if (sec < 0) {
        clearInterval(timer);
        alert("game over");
      }
    }, 1000);
  }

  return <div className="timer">timer:{time}</div>;
};

export default Timer;
