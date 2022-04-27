import React, { useState } from "react";
import Hook2 from "./Hook2";
function HookContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>toogle</button>
      {display && <Hook2 />}
      {/* {display ? <Hook2 /> : null} */}
    </div>
  );
}

export default HookContainer;
