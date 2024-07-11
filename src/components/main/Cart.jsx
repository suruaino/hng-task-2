
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './styles.css';
import CartItem from './CartItem';

const Cart = ({ cart, cartToggle, removeFromCart, closeCartOverlay }) => {

    const total = cart.reduce((sum, item) => parseFloat(sum + item.price) ,0);

  return (
    <section id="cart-items" className="cart-items">
      <h2>MY CART</h2>

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
        {/* {<Link className="remove-btn" to="/cartmain">View Cart</Link> &&   setShowCart(true)} */}
        <Link className="remove-btn" to="/cartmain" onClick={cartToggle}>View Cart</Link>
        <Link className="checkout">Check Out</Link>
      </div>
    </section>
  );
 
};

export default Cart;

