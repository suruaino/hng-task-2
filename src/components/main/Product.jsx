import React from 'react';

const Product = ({ product, addToCart }) => {
  const organizationId ="27f6387b9d7b4f4d823cf6c910de5825";
  const appId = 'AJ5T733PD8P1NHF';
  const apiKey = '2f8b45bc903246de81dfb434c5f3e4ed20240713011223927260';
  const url = `https://api.example.com/products/${productId}`;

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
