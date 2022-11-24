import { BUY_ICECREAM } from "./iceCreamType";
import { REMOVE_ICECREAM } from "./iceCreamType";
export const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
  };
};
export const removeIceCream = () => {
  return {
    type: REMOVE_ICECREAM,
  };
};
