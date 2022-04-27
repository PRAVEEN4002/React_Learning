import React from "react";
import CakeContainer from "./Components/CakeContainer";
import { Provider } from "react-redux";
import HookCakeContainer from "./Components/HookCakeContainer";
import store from "./redux/store";
import IceCreamContainer from "./Components/IceCreamContainer";
import ChocolateContainer from "./Components/ChocolateContainer";
import "./App.css";
import NewCakeContainer from "./Components/NewCakeContainer";
import ItemContainer from "./Components/ItemContainer";
import UserContainer from "./Components/UserContainer";
import MouseContainer from "./Components/MouseContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer NAME="BANDI PRAVEEN" />
        <ItemContainer />
        <hr />
        <CakeContainer />
        <hr />
        <h5>With hook</h5>
        <HookCakeContainer />
        <hr />
        <hr />
        <IceCreamContainer />
        <hr /> <hr />
        <ChocolateContainer />
        <hr />
        <hr />
        <NewCakeContainer />
        <hr />
        <hr />
        <MouseContainer />
      </div>
    </Provider>
  );
}

export default App;
