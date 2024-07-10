

import React from "react";
import {useState} from "react";
import "./cartmainitem.css";

const CartMainItem = ({ item, removeFromCart, handleNegativeClick, handlePositiveClick, quantity, subTotal, itemNumber }) => {
    // const subTotal = cart.reduce((sum, item) => parseFloat(sum + item.price), 0);
    // const [quantity, setQuantity] = useState(0);
  
    // const handlePositiveClick = () => {
    //   setQuantity(quantity + 1);
    //   console.log(quantity);
    // };
    // const handleNegativeClick = () => {
    //   setQuantity(quantity - 1);
    //   console.log(quantity);
    // };


  return (
    <div className="cart-main-item">
      <div className="cart-main-content">
        <img src={item.imageUrl} alt="" />

        <div className="item-content-box">
          <h2>{item.name}</h2>

          <span><p>{}</p><p>#{item.price}</p></span>

          <div className="quantity-btn-box">
            <button onClick={handleNegativeClick}>-</button>
            <span>{quantity}</span>
            <button onClick={handlePositiveClick}>+</button>
          </div>

          <div className="sub-total">
            #{quantity * item.price}
          </div>
          
        </div>

      </div>

      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove Item</button>

    </div>
  );
};

export default CartMainItem;

