import React, { useState } from "react";
import { useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";
function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(80000);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button
        handleClick={useCallback(
          () => setAge((prevState) => prevState + 1),
          [age]
        )}
      >
        Increment Age
      </Button>
      <Count text="Salary" count={salary} />
      <Button
        handleClick={useCallback(
          () => setSalary((prevState) => prevState + 1000),
          [salary]
        )}
      >
        Increment salary
      </Button>
    </div>
  );
}

export default ParentComponent;
