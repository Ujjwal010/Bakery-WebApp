import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyIceCream } from "../Redux/icecream/iceCreamAction";

function IceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>ICE-CREAM</h1>
      <h1>Quantity:{numOfIceCream}</h1>
      <button onClick={() => dispatch(buyIceCream())}>BUY</button>
    </div>
  );
}

export default IceCreamContainer;
