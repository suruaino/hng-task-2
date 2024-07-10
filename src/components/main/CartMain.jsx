import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import CartMainItem from "./CartMainItem";

const CartMain = ({ cartMain, removeFromCart }) => {
    const subTotal = cartMain.reduce((sum, item) => parseFloat(sum + item.price), 0);

    const [quantity, setQuantity] = useState(0);
  
    const handlePositiveClick = () => {
      setQuantity(quantity + 1);
      console.log(quantity);
    };
    const handleNegativeClick = () => {
      setQuantity(quantity - 1);
      console.log(quantity);
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
          {cartMain.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            
            cartMain.map((item) => (
            
              <CartMainItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                handleNegativeClick={handleNegativeClick}
                handlePositiveClick={handlePositiveClick}
                quantity={quantity}
                subTotal={subTotal}
              />
            ))
          )}


   

        </div>

        <div className="total">
            <Link>Back toshop</Link>
            <Link>Update Cart</Link>
        </div>
      </div>
      <div className="cart-main__total-box">
        <header>
          <h2>Cart Totals</h2>
        </header>
        <div className="calculations">
            <div>
                <span>Subtotal</span>
            </div>
        </div>
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

export default CartMain;
