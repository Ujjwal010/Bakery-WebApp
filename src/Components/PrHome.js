import { useNavigate } from "react-router-dom";
import { buyCake } from "../Redux/cake/cakeActions";
import { connect } from "react-redux";
import React, { Component } from "react";
class Homepr extends Component {
  render(props) {
    return (
      <div className="Home">
        <h1>no of cakes{props.numOfCakes}</h1>
        <button onClick={props.buyCake}>Buy cake</button>
        <button onClick={() => navigate("cart")}>Cart{props.numOfCakes}</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepr);

/*import React from "react";
import CakeContainer from "./CakeContainer";
import IceCreamContainer from "./IceCreamContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ChocolateContainer from "./ChocolateContainer";

function Home(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.total);
  return (
    <div className="home">
      <h2>WELCOME TO</h2>
      <h2>BASKET BAKERY</h2>
      <button onClick={() => navigate("cart")}>Cart{cart}</button>
      <CakeContainer />
      <IceCreamContainer />
      <ChocolateContainer />
    </div>
  );
}


export default Home;*/
