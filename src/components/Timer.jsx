import { useEffect } from "react";
import { useState } from "react";

const Timer = ({ text, timeout, timerExceed }) => {
  const [seconds, setSeconds] = useState(timeout);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevState) => prevState - 1);
      } else {
        timerExceed();
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds, timerExceed]);

  return (
    <p>
      {text} {seconds} seconds
    </p>
  );
};

export default Timer;
