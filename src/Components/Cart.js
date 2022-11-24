import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../Redux/cake/cakeActions";
import { removeCake } from "../Redux/cake/cakeActions";
import { buyIceCream } from "../Redux/icecream/iceCreamAction";
import { removeIceCream } from "../Redux/icecream/iceCreamAction";
import { buyChocolate } from "../Redux/chocolate/chocolateAction";
import { removeChocolate } from "../Redux/chocolate/chocolateAction";
import { useNavigate } from "react-router-dom";
function Cart() {
  const numOfCakes = useSelector((state) => state.cart.numOfCakes);
  const numOfIceCream = useSelector((state) => state.cart.numOfIceCream);
  const numOfChocolate = useSelector((state) => state.cart.numOfChocolate);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <div className="cart">
        <h1>CAKE</h1>
        <h1>Quantity:{numOfCakes}</h1>
        <button onClick={() => dispatch(buyCake())}>BUY</button>
        <button onClick={() => dispatch(removeCake())}>REMOVE</button>
      </div>
      <div className="cart">
        <h1>Ice-Cream</h1>
        <h1>Quantity:{numOfIceCream}</h1>
        <button onClick={() => dispatch(buyIceCream())}>BUY</button>
        <button onClick={() => dispatch(removeIceCream())}>REMOVE</button>
      </div>
      <div className="cart">
        <h1>Chocolate</h1>
        <h1>Quantity:{numOfChocolate}</h1>
        <button onClick={() => dispatch(buyChocolate())}>BUY</button>
        <button onClick={() => dispatch(removeChocolate())}>REMOVE</button>
      </div>
      <button onClick={() => navigate("/checkout")}>CHECKOUT</button>
    </div>
  );
}

export default Cart;
