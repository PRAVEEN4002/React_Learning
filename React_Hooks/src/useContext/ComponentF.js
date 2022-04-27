import React from "react";
import { UserContext } from "../App";
import { ChannelContext } from "../App";
function ComponentF() {
  return (
    <div>
      <UserContext.Consumer>
        {(value) => {
          return (
            <ChannelContext.Consumer>
              {(chanel) => {
                return (
                  <div>
                    channle context value {chanel} user: {value}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
