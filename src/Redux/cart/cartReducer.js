import { BUY_CAKE } from "../cake/cakeTypes";
import { REMOVE_CAKE } from "../cake/cakeTypes";
import { BUY_ICECREAM } from "../icecream/iceCreamType";
import { REMOVE_ICECREAM } from "../icecream/iceCreamType";
import { BUY_CHOCOLATE } from "../chocolate/chocolateType";
import { REMOVE_CHOCOLATE } from "../chocolate/chocolateType";
const initialCartState = {
  numOfCakes: 0,
  numOfIceCream: 0,
  numOfChocolate: 0,
  total: 0,
};
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
        total: state.total + 1,
      };
    case REMOVE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
        total: state.total - 1,
      };
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + 1,
        total: state.total + 1,
      };
    case REMOVE_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
        total: state.total - 1,
      };
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate + 1,
        total: state.total + 1,
      };
    case REMOVE_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate - 1,
        total: state.total - 1,
      };
    default:
      return state;
  }
};
export default cartReducer;
