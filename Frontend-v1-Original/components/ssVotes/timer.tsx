import { useState, useEffect } from "react";

import classes from "./ssVotes.module.css";

const SECOND = 1_000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export default function Timer({ deadline }: { deadline: number }) {
  const { days, hours, minutes, seconds } = useTimer(deadline, MINUTE);
  return (
    <div className={classes.timerBox}>
      <div className={classes.timerBox_title}>Epoch timer</div>
      <div className={classes.timerText}>
        {days + hours + minutes + seconds <= 0
          ? "0d 0h 0m"
          : `${days}d ${hours}h ${minutes}m`}
      </div>
    </div>
  );
}

function useTimer(deadline: number, interval = SECOND) {
  const [timeLeft, setTimeLeft] = useState(deadline * 1000 - Date.now());

  useEffect(() => {
    setTimeLeft(deadline * 1000 - Date.now());
    const intervalId = setInterval(() => {
      console.log("got inside set interval");
      setTimeLeft(deadline * 1000 - Date.now());
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [deadline]);

  return {
    days: Math.floor(timeLeft / DAY),
    hours: Math.floor((timeLeft / HOUR) % 24),
    minutes: Math.floor((timeLeft / MINUTE) % 60),
    seconds: Math.floor((timeLeft / SECOND) % 60),
  };
}
