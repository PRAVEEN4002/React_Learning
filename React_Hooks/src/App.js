import "./App.css";
import React from "react";
import ComponentC from "./useContext/ComponentC";

export const UserContext = React.createContext();
export const MouseContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"bandi"}>
        <ChannelContext.Provider value={"Praveentechintelugu"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
