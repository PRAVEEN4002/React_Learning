import { BUY_CAKE } from "./cakeTypes";
//It is called action creator

export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};
