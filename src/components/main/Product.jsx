import React from 'react';

const Product = ({ product, addToCart }) => {



    return (
        <div className="product">
            <div className='content'>
                <img src={product.imageUrl} alt={product.name} />
                
                <p>{product.description}</p>
                <h2 className='product__name'>{product.name}</h2>
                
                <p className='product__price'>#{product.price}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>

        </div>
    );
};

export default Product;


