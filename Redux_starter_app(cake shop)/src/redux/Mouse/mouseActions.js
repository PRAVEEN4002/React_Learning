import { BUY_MOUSE } from "./mouseTypes";

export const buyMouse = (number = 10) => {
  return {
    type: BUY_MOUSE,
    payload: number,
  };
};
