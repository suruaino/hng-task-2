import React from 'react';
import { useState, useEffect } from 'react';
import Product from './Product';
import products from './ProductData';
import './styles.css';

const ProductList = ({ addToCart }) => {
//   console.log("ProductList addToCart:", addToCart);
// const [products, setProducts] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

// useEffect(() => {
//   const fetchProducts = async () => {
//     const organizationId ='27f6387b9d7b4f4d823cf6c910de5825';
//     const appId = 'AJ5T733PD8P1NHF';
//     const apiKey = '2f8b45bc903246de81dfb434c5f3e4ed20240713011223927260';
//     const url = `https://timbu-get-single-product.reavdev.workers.dev/?organization_id=${organizationId}&Appid=${appId}&Apikey=${apiKey}`;


    




//     console.log('Fetching from URL:', url);

//     try {
//       const response = await fetch(url, {
     
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Appid': appId, 
//           'Appkey': apiKey,

//         }
        
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error('Error response:', errorText);
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//       setProducts(data);
//       setLoading(false);
//       console.log(data)

//     } catch (err) {
//       console.error('Fetch error:', err);
//       setError(err.message);
//       setLoading(false);
//     }

//   };

//   fetchProducts();
// }, []);

// if (loading) {
//   return <div>Loading...</div>;
// }

// if (error) {
//   return <div>Error: {error}</div>;
// }

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
