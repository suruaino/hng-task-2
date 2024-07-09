
import {useState} from 'react';
import './styles.css';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {

    const total = cart.reduce((sum, item) => parseFloat(sum + item.price) ,0);
    const [count, setCount] = useState(0);

    const handlePositiveClick = () => {
      setCount(count + 1);
      console.log(count);
    }
    const handleNegativeClick = () => {
      setCount(count - 1);
      console.log(count);
    }

    
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
        <button className="remove-btn">View Cart</button>
        <button className="checkout">Check Out</button>
      </div>
    </section>
  );
 
};

export default Cart;

