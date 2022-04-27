import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./IceCream/iceCreamReducer";
import chocolateReducer from "./Chocolate/chocolateReducer";
import userReducer from "./User/userReducer";
import mouseReducer from "./Mouse/mouseReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  chocolate: chocolateReducer,
  user: userReducer,
  mouse: mouseReducer,
});

export default rootReducer;
