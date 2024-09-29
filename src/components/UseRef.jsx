import { useRef, useState } from "react";

export default function UseRef() {
  const [seconds, setSeconds] = useState(0);
  const timerId = useRef(null);
  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((currentSeconnds) => currentSeconnds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };
  return (
    <>
      <p>UseRef Demo</p>
      <hr />
      <p>Example 1</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <p>Seconds : {seconds}</p>

      <hr />
      <p>Example 2</p>
      
    </>
  );
}
