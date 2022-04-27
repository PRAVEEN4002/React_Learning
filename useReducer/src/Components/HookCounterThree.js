import React from "react";
import { useReducer } from "react";
const intialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};
function HookCounterThree() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [count2, dispatch2] = useReducer(reducer, intialState);
  return (
    <>
      <div>
        <div>count - {count}</div>
        <div>Counter2: {count2}</div>
        <button
          onClick={() => {
            dispatch("increment");
          }}
        >
          increment
        </button>
        <button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          decrement
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          reset
        </button>
        <div>
          <button
            onClick={() => {
              dispatch2("increment");
            }}
          >
            increment
          </button>
          <button
            onClick={() => {
              dispatch2("decrement");
            }}
          >
            decrement
          </button>
          <button
            onClick={() => {
              dispatch2("reset");
            }}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default HookCounterThree;
