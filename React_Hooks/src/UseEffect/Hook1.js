import React, { useState, useEffect } from "react";

function Hook1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect: updating document");
    document.title = `clicked ${count} times`;
  }, [count]);
  return (
    <>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        click {count}
      </button>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
    </>
  );
}

export default Hook1;
