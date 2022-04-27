import React from "react";
// import ComponentF from "./ComponentF";
import { UserContext } from "../App";
import { ChannelContext } from "../App";
import { useContext } from "react";
function ComponentE() {
  const user = useContext(UserContext);
  const Channel = useContext(ChannelContext);
  return (
    <div>
      <h1>user:{user}</h1>
      <h1> cahnnel:{Channel}</h1>
    </div>
  );
}

export default ComponentE;
