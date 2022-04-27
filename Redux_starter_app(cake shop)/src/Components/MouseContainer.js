import React from "react";
import { connect } from "react-redux";
import { buyMouse } from "../redux";
import { useState } from "react";
function MouseContainer({ numOfMouses, buyMouse }) {
  const [number, setNumber] = useState();

  return (
    <div>
      <h1>mouse container</h1>
      <h2>state:{numOfMouses}</h2>
      <input
        placeholder="enter here"
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyMouse(number)}>buy </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfMouses: state.mouse.numOfMouses,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    buyMouse: (number) => {
      dispatch(buyMouse(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchProps)(MouseContainer);
