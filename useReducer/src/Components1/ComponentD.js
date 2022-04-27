import React from "react";
import { CountContext } from "../App";
import { useContext } from "react";
function ComponentD() {
  const { countValue, dispactchValue } = useContext(CountContext);
  return (
    <div>
      ComponentD Count value- {countValue}
      <div>
        <button onClick={() => dispactchValue("increment")}>increment</button>
        <button onClick={() => dispactchValue("decrement")}>decrement</button>
        <button onClick={() => dispactchValue("reset")}>reset</button>
      </div>
    </div>
  );
}

export default ComponentD;
