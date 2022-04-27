import { BUY_MOUSE } from "./mouseTypes";

const intialMouse = {
  numOfMouses: 10,
};

const mouseReducer = (state = intialMouse, action) => {
  switch (action.type) {
    case BUY_MOUSE:
      return {
        ...state,
        numOfMouses: state.numOfMouses - action.payload,
      };
    default:
      return state;
  }
};

export default mouseReducer;
