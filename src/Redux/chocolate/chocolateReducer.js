import { BUY_CHOCOLATE } from "./chocolateType";
import { REMOVE_CHOCOLATE } from "./chocolateType";
const initialChocolateState = {
  numOfChocolate: 20,
};
const chocolateReducer = (state = initialChocolateState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate - 1,
      };
    case REMOVE_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate + 1,
      };
    default:
      return state;
  }
};
export default chocolateReducer;
