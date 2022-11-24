import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeActions";

function CakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <h1>CAKE</h1>
      <h1>Quantity:{numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>BUY</button>
    </div>
  );
}

export default CakeContainer;
