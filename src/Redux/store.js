import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import cartReducer from "./cart/cartReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import chocolateReducer from "./chocolate/chocolateReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  cake: cakeReducer,
  cart: cartReducer,
  icecream: iceCreamReducer,
  chocolate: chocolateReducer,
});
const store = createStore(rootReducer);
export default store;
