import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [a, setA] = useState([]);
  return (
    <div>
      <input
        value={name.firstName}
        onChange={(e) => {
          setName({ ...name, firstName: e.target.value });
        }}
      ></input>
      <input
        value={name.lastName}
        type="text"
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
      ></input>
      <h1>{JSON.stringify(name)}</h1>
      <h2>{name.lastName}</h2>
      <hr />
      <button
        onClick={() => {
          setA([...a, Math.floor(Math.random() * 100)]);
        }}
      ></button>
      {a.map((item) => {
        return <h4>{item}</h4>;
      })}
    </div>
  );
}

export default HookCounterThree;
