import React, { useState,useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  let timer = useRef();
  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime}second{targetTime > 1 ? "s" : ""}
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"}
          </button>
        </p>
      </p>

      <p className="">
        {" "}
        {timerStarted ? "Time is running ..." : "Timer inactive"}
      </p>
    </section>
  );
}
