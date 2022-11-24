import { BUY_CHOCOLATE } from "./chocolateType";
import { REMOVE_CHOCOLATE } from "./chocolateType";
export const buyChocolate = () => {
  return {
    type: BUY_CHOCOLATE,
  };
};
export const removeChocolate = () => {
  return {
    type: REMOVE_CHOCOLATE,
  };
};
