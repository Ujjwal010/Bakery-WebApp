import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyChocolate } from "../Redux/chocolate/chocolateAction";

function ChocolateContainer() {
  const numOfChocolate = useSelector((state) => state.chocolate.numOfChocolate);
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h1>Chocolate</h1>
      <h1>Quantity:{numOfChocolate}</h1>
      <button onClick={() => dispatch(buyChocolate())}>BUY</button>
    </div>
  );
}

export default ChocolateContainer;
