import React from "react";
import { useState, useMemo } from "react";
function Counter() {
  const [firstCounter, setfirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(0);

  const incrmentOne = () => {
    setfirstCounter((prevState) => prevState + 1);
  };
  const incrementTwo = () => {
    setSecondCounter((prevState) => prevState + 1);
  };
  const isEven = useMemo(() => {
    console.log("isEven");
    var i = 0;
    while (i <= 200000000) i++;
    return secondCounter % 2 === 0;
  }, [secondCounter]);

  return (
    <div>
      <button onClick={incrmentOne}>Count -{firstCounter}</button>

      <br></br>
      <button onClick={incrementTwo}>count -{secondCounter}</button>
      {isEven ? "even" : "odd"}
    </div>
  );
}

export default Counter;
