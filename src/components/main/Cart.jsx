

const Cart = ({ cart = [], removeFromCart }) => {



    return (
        <section id="cart-items">
            {cart.length === 0 ? (
                <>
                <h2>CART</h2>
                <p>Your cart is empty</p>
                </>
            ) : (
               
                
                cart.map(item => (
                    <>
                    <h2>CART</h2>
                    <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
                    </>
                ))
             
            )}
        </section>
    );
}

export default Cart;