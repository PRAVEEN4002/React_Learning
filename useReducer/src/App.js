import "./App.css";
import React from "react";
import { useReducer } from "react";
import ComponentA from "./Components1/ComponentA";
import ComponentB from "./Components1/ComponentB";
import ComponentC from "./Components1/ComponentC";
export const CountContext = React.createContext();
const intialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state + 1;
    case "reset":
      return intialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatchEvent] = useReducer(reducer, intialState);
  return (
    <div className="App">
      Count value - {count}
      <CountContext.Provider value={{ countValue: count, dispactchValue: dispatchEvent }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;
