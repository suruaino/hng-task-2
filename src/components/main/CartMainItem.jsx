

import React from "react";
import {useState} from "react";
import "./cartmainitem.css";

const CartMainItem = ({ item, removeFromCart, handleNegativeClick, handlePositiveClick, quantity, subTotal, itemNumber }) => {
const price = item?.current_price[0]?.NGN[0];
  return (
    <div className="cart-main-item">
      <div className="cart-main-content">
        <div className="book-details">
        {/* <img src={item.imageUrl} alt="" /> */}
        <img src={`https://api.timbu.cloud/images/${item?.photos[0]?.url}`} />
        <h2>{item.name}</h2>
        </div>
        <div className="item-content-box">
          {/* <h2 className="border">{item.name}</h2> */}

          <span className="unit-price">#{price}</span>

          <div className="quantity-btn-box">
            <button onClick={handleNegativeClick}>-</button>
            <span>{quantity}</span>
            <button onClick={handlePositiveClick}>+</button>
          </div>

          <div className="sub-total">
            #{quantity * price}
          </div>
          
        </div>

      </div>

      <button className="remove-btn" onClick={() => removeFromCart(item.id)}><i className="fa-solid fa-xmark"></i></button>

    </div>
  );
};

export default CartMainItem;

