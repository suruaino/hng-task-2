import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
            <div>
                <h2>{item.name}</h2>
                <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    );
};

export default CartItem;
