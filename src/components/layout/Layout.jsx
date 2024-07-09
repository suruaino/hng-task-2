import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = ({cart, addToCart, removeFromCart}) => {
  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   console.log("Adding to cart:", product);
  //   setCart([...cart, product]);
  //   setTotal(total + item.price);
  // };
  return (
    <div>
      <Header cart ={cart} removeFromCart={removeFromCart} />
      <main>
        <Outlet addToCart={addToCart} removeFromCart= {removeFromCart} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
