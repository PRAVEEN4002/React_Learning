import React, { useEffect, useState } from "react";

function Hook2() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosistion = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("mousemove", logMousePosistion);
    return () => {
      window.removeEventListener("mousemove", logMousePosistion);
    };
  }, []);
  return (
    <div>
      Hook X-{x} Y={y}
    </div>
  );
}

export default Hook2;
