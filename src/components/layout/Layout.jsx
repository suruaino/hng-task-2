import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({cart, cartToggle, addToCart, removeFromCart, showCartOverlay, closeCartOverlay}) => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   console.log("Adding to cart:", product);
  //   setCart([...cart, product]);
  //   setTotal(total + item.price);
  // };
  return (
    <div>
      <Header cart={cart} cartToggle={cartToggle} removeFromCart={removeFromCart} showCartOverlay={showCartOverlay} closeCartOverlay={closeCartOverlay} />
      <main>
        <Outlet addToCart={addToCart} removeFromCart= {removeFromCart} closeCartOverlay={closeCartOverlay}  />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
