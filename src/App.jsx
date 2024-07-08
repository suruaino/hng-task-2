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
      setCart([...cart, product]);

  }

  const removeFromCart = (id) => {
      setCart(cart.filter(item => item.id !== id));
  }
  console.log('App component - addToCart function:', addToCart);
  return (
    <>
    <Routes>
      <Route path="/" element={<Layer />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/components/main/ProductList" element={<ProductList addToCart={addToCart} />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* <Route path="/destination/*" element={<Destination />}>
          <Route index element={<Navigate to="moon" />} />
          <Route path="moon" element={<Moon />} />  
          <Route path="mars" element={<Mars />} />
          <Route path="europa" element={<Europa />} />
          <Route path="titan" element={<Titan />} />
        </Route>

        <Route path="/crew/*" element={<Crew />}>
          <Route index element = {<Navigate to="commander" />} />
          <Route path="commander" element={<Commander />} /> 
          <Route path="mission-specialist" element={<MissionSpecialist/>} /> 
          <Route path="flight-engineer" element={<FlightEngineer />} /> 
          <Route path="pilot" element={<Pilot />} />
        </Route>

        <Route path="/technology" element={<Technology />}>
          <Route index element = {<Navigate to="launch" />} />
          <Route path="launch" element={<Launch />} /> 
          <Route path="spaceport" element={<Spaceport/>} /> 
          <Route path="capsule" element={<Capsule />} /> 
        </Route> */}
      </Route>
      <Route path="*" element={<ErrorMsg />}></Route>
    </Routes>
    </>
  );
}

export default App;
