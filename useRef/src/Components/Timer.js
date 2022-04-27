import React, { useState, useEffect, useRef } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  const intervalref = useRef();
  var startTimer = () => {
    intervalref.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
  };
  useEffect(() => {
    intervalref.current = setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(intervalref.current);
    };
  }, []);

  return (
    <div>
      Timer-{timer}
      <button
        onClick={() => {
          clearInterval(intervalref.current);
        }}
      >
        clear timer
      </button>
      <button onClick={startTimer}>start timer</button>;
    </div>
  );
}

export default Timer;
