import React from "react";
import { connect } from "react-redux";
import { buyChocolate } from "../redux";
function ChocolateContainer(props) {
  return (
    <div>
      <h1>Number of Chocolates - {props.numOfChocolates}</h1>
      <button onClick={props.buyChocolate}>buy Chocolate</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfChocolates: state.chocolate.numOfChocolates,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyChocolate: () => {
      dispatch(buyChocolate());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer);
