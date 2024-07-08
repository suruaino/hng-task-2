

import './styles.css';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart }) => {
//   console.log("Cart items:", cart);

  return (
    <section id="cart-items" className="cart-items">
      <h2>MY CART</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map(item => (
          <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))
      )}
    </section>
  );
};

export default Cart;

