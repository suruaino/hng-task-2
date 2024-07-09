import React from 'react';

const Product = ({ product, addToCart }) => {
//   console.log("Product addToCart:", addToCart);

  return (
    <div className="product">
      <div className='content'>
        <img src={product.imageUrl} alt={product.name} />
        <div>
          <p>{product.description}</p>
          <h2 className='product__name'>{product.name}</h2>
          <p className='product__price'>#{product.price}</p>
        </div>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
