import React from "react";
import CakeContainer from "./CakeContainer";
import IceCreamContainer from "./IceCreamContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ChocolateContainer from "./ChocolateContainer";

function Home() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.total);
  return (
    <div className="home">
      <h2>WELCOME TO</h2>
      <h2>BASKET BAKERY</h2>
      <button onClick={() => navigate("cart")}>Cart-{cart}</button>
      <CakeContainer />
      <IceCreamContainer />
      <ChocolateContainer />
    </div>
  );
}
export default Home;
