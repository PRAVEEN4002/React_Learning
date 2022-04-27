import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";
function ItemContainer(props) {
  return (
    <div>
      <h2>ITEM -{props.Item}</h2>
      <button onClick={props.buyItem}>
        buy {props.NAME ? "cakes" : "ice creams"}
      </button>
    </div>
  );
}
const mapStateToProps = (state, ownPops) => {
  const ItemState = ownPops.NAME
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;
  return {
    Item: ItemState,
  };
};
const mapDispatchProps = (dispatch, ownPops) => {
  const dispatchFunction = ownPops.NAME
    ? () => {
        dispatch(buyCake());
      }
    : () => {
        dispatch(buyIceCream());
      };
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchProps)(ItemContainer);
