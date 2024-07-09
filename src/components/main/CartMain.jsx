import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import CartItem from "./CartItem";

const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => parseFloat(sum + item.price), 0);
  const [count, setCount] = useState(0);

  const handlePositiveClick = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleNegativeClick = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <section id="cart-items" className="cart-main">
      <h2>Cart</h2>
      <div className="cart-main__product-box">
        <header>
          <span className="products">Product</span>
          <div className="others">
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
        </header>
        <div className="cart-main__box">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))
          )}
          {/* <div className="quantity-btn-box">
            <button>-</button>
            <span>{quantity}</span>
            <button>+</button>
          </div>
          <div className="sub-total">
            {subTotal}
          </div> */}
        </div>
      </div>
      <div className="cart-main__total-box">
        <header>
          <h2>Cart Totals</h2>
        </header>
      </div>

      {/* 
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart}  />
        ))
      )}

      <div className="price-total">
        <span>Total</span> #{total}
      </div>
      <div className="cart-btn-box flex flex-col gap-2 mt-6">
        <Link className="remove-btn" to="/cart">View Cart</Link>
        <Link className="checkout">Check Out</Link>
      </div> */}
    </section>
  );
};

export default Cart;
