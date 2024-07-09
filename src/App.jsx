import "./App.css";
import { useState } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Layer from "./components/layout/Layout";
import Home from "./components/main/Home";
import Cart from "./components/main/Cart";
import Checkout from "./components/main/Checkout";
import ProductList from "./components/main/ProductList";

const ErrorMsg = () => {
  return (
    <section
      className="error-message"
      style={{
        color: "#0B0D17",
        fontSize: "1.75rem",
        fontWeight: "Bold",
        height: "100dvh",
      }}
    >
      <h2>
        404 Error <br /> Page will be live soon!!!
      </h2>
      <Link to="/home">Back to home</Link>
    </section>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // console.log("App addToCart:", addToCart);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layer cart={cart} addToCart={addToCart} removeFromCart= {removeFromCart} />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home addToCart= {addToCart} />} />
          <Route path="cart" element={<Cart cart={cart} removeFromCart= {removeFromCart} />} />
          <Route path="products" element={<ProductList addToCart= {addToCart} />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="*" element={<ErrorMsg />} />
      </Routes>
    </>
  );
};

export default App;
