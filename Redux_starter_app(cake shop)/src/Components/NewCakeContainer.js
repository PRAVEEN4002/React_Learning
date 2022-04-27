import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";
import { useState } from "react";
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>number of cakes - {props.numOfCakes}</h1>
      <input
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        value={number}
        type="number"
      />
      <button onClick={() => props.buyCake(number)}>
        Buy {number} {number > 1 ? "cakes" : "cake"}
      </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
