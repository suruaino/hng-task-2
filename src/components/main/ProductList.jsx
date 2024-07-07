

// const Products = () => {

//     return(
//         <div className="products">

//         </div>
//     )
// }

// export default Products;


import React from 'react';
import Product from './Product';

import './styles.css';
import products from './ProductData';


// const products = [
//     { id: 1, name: 'The Subtle Act of Not Giving A Fuck', description: 'Non-Fiction', price: '6000', imageUrl: logo },
//     { id: 2, name: 'Becoming Michelle Obama', description: 'Non-Fiction', price: 8000, imageUrl: logo },
//     { id: 3, name: 'Thinking Fast and Slow', description: 'Non-Fiction', price: 6000, imageUrl: logo },
//     { id: 4, name: 'Finding Me', description: 'Non-Fiction', price: 5500, imageUrl: logo },
//     { id: 5, name: 'Breath', description: 'Non-Fiction', price: 6000, imageUrl: logo },
//     { id: 6, name: 'The Snake Head', description: 'Non-Fiction', price: 7500, imageUrl: logo },
//     { id: 7, name: 'Atomic Habits', description: 'Non-Fiction', price: 6000, imageUrl: logo },
//     { id: 8, name: 'How to Stand Up to a Deictator', description: 'Non-Fiction', price: 6000, imageUrl: logo },
//     { id: 9, name: 'The Psychology of Stupidity', description: 'Non-Fiction', price: 7000, imageUrl: logo },
//     { id: 10, name: 'You Just Need To Lose Weight', description: 'Non-Fiction', price: 8000, imageUrl: logo },
//     { id: 11, name: 'Stay Curious', description: 'Non-Fiction', price: 8000, imageUrl: logo },
//     { id: 12, name: 'Think And Grow Rich', description: 'Non-Fiction', price: 10000, imageUrl: logo }
// ];

const ProductList = ({ addToCart }) => {
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
