import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CheckOut from "./Components/CheckOut";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
