

import React from "react";
import {useState} from "react";
import "./styles.css";

const CartItem = ({ item, removeFromCart, itemNumber }) => {



  return (
    <div className="cart-item">
      
      <div className="main-content">

        <img src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`} />
        <div className="item-content-box">
          <h2>{item.name}</h2>
          <span><p>{}</p><p>#{item?.current_price[0]?.NGN[0]}</p></span>
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

