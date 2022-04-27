import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h1>Number of cakes ={props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy cake </button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};
const mapDispatchProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
// const mapStateToProps = (state) => {
//   return {
//     numOfCakes: state.numOfCakes,
//   };
// };
// const mapDispatchProps = (dispatch) => {
//   return {
//     buyCake: () => {
//       dispatch(buyCake());
//     },
//   };
// };

export default connect(mapStateToProps, mapDispatchProps)(CakeContainer);
