import React from 'react';
import Product from './Product';
import products from './ProductData';
import './styles.css';

const ProductList = ({ addToCart }) => {
    console.log('ProductList props - addToCart:', addToCart);

    return (
        <div className='products-box'>
            <section id="products" className='products'>
                {products.map(product => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </section>
            <div className="navigation">
                <button>Back</button>
                <span>1</span>
                <span>2</span>
                <button>Next</button>
            </div>
        </div>
    );
};

export default ProductList;
