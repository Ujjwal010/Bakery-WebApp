import { BUY_ICECREAM } from "./iceCreamType";
import { REMOVE_ICECREAM } from "./iceCreamType";
const initialIceCreamState = {
  numOfIceCream: 20,
};
const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    case REMOVE_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
