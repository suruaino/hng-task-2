import React from 'react';

const Product = ({ product, addToCart }) => {

  return (
    <div className="product">
      <div className='content'>
        {/* <img src={product.imageUrl} alt={product.name} /> */}
        <img src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} />
        <div>
          <p>{product.description}</p>
          {/* <p>{product.category}</p> */}
          <h2 className='product__name'>{product.name}</h2>
          <p className='product__price'>#{product?.current_price[0]?.NGN[0]}</p>
        </div>
      </div>
      <button onClick={() => addToCart(product)}>Add to Cart </button>
    </div>
  );
};

export default Product;





// const fetchProducts = async ({ organization_id, reverse_sort, page, size, Appid, Apikey }) => {
//     const url = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
//     url.searchParams.append('organization_id', organization_id);
//     url.searchParams.append('reverse_sort', reverse_sort);
//     url.searchParams.append('page', page);
//     url.searchParams.append('size', size);
//     url.searchParams.append('Appid', Appid);
//     url.searchParams.append('Apikey', Apikey);

//     const response = await fetch(url.toString());

//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }

//     return response.json();
// };

// const Product = ({addToCart}) => {
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [isEmpty, setIsEmpty] = useState(false);
//     const [isError, setIsError] = useState(false);
//     const [page, setPage] = useState(1);

//     useEffect(() => {
//         const params = {
//             organization_id: '27f6387b9d7b4f4d823cf6c910de5825',
//             reverse_sort: 'false',
//             page: page,
//             size: 5,
//             Appid: 'AJ5T733PD8P1NHF',
//             Apikey: '2f8b45bc903246de81dfb434c5f3e4ed20240713011223927260'
//         };

//         const getProducts = async () => {
//             setIsLoading(true);
//             setIsError(false);
//             try {
//                 const data = await fetchProducts(params);
//                 setProducts(data.items);
//                 setIsEmpty(data.total === 0);
//                 console.log(data)
//             } catch (error) {
//                 setIsError(true);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         getProducts();
//     }, [page]);



//     if (isLoading) return <div>Loading...</div>;
//     if (isError) return <div>Error fetching products</div>;
//     if (isEmpty) return <div>No products found</div>;

// return (
//   <div>
//       <div>
//           {products.map(product => (

//               <div key={product.id} shadow="sm" padding="lg" radius="md" withBorder>
//                   <section>
//                       <img src={`https://api.timbu.cloud/images/${product?.photos[0]?.url}`} height={160} alt={product.name} />
//                   </section>
//                   <div position="apart" mt="md" mb="xs">
//                       <h2 weight={500}>{product.name}</h2>
//                       <span color="pink" variant="light">
//                           {/* ${product?.current_price[1]?.USD[0]} */}
//                           ${product?.current_price[0]?.NGN[0]}
//                       </span>
//                   </div>
//                   <h3 size="sm">{product?.description}</h3>
//               </div>
//           ))}
//       </div>
//       <div position="center" mt="md">
//           <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Prev</button>
//           <button onClick={() => setPage(page + 1)}>Next</button>
//       </div>
//   </div>
// );
// };

// export default Product;