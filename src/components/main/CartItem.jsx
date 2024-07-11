

import React from "react";
import {useState} from "react";
import "./styles.css";

const CartItem = ({ item, removeFromCart, itemNumber }) => {



  return (
    <div className="cart-item">
      
      <div className="main-content">
        <img src={item.imageUrl} alt="" />
        <div className="item-content-box">
          <h2>{item.name}</h2>
          <span><p>{}</p><p>#{item.price}</p></span>
        </div>

      </div>
      <div className="total">
            <span></span>
            <span></span>
      </div>
      <button className="remove-btn" onClick={() => removeFromCart(item.id)}><i className="fa-solid fa-xmark"></i></button>

    </div>
  );
};

export default CartItem;

