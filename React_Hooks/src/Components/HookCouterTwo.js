import React, { useState } from "react";

function HookCouterTwo() {
  const intialCount = 0;
  const [count, setCount] = useState(intialCount);

  return (
    <div>
      <button>{count}</button>
      <button onClick={() => setCount((prevState) => prevState + 1)}>increment</button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>decrement</button>
      <button onClick={() => setCount(intialCount)}>reset</button>
    </div>
  );
}

export default HookCouterTwo;
