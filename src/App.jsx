// import "./App.css";
// import { useState, useEffect } from "react";
// import { Route, Routes, Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import Layer from "./components/layout/Layout";
// import Home from "./components/main/Home";
// import Cart from "./components/main/Cart";
// import CartMain from "./components/main/CartMain";
// import Checkout from "./components/main/Checkout";
// import ProductList from "./components/main/ProductList";


// const ErrorMsg = () => {
//   return (
//     <section
//       className="error-message"
//       style={{
//         color: "#0B0D17",
//         fontSize: "1.75rem",
//         fontWeight: "Bold",
//         height: "100dvh",
//       }}
//     >
//       <h2>
//         404 Error <br /> Page will be live soon!!!
//       </h2>
//       <Link to="/home">Back to home</Link>
//     </section>
//   );
// };

// const App = () => {
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const cartToggle = () => {
//     setShowCart((prev) => !prev);
  
//   };

//   const addToCart = (product) => {
//     console.log("Adding to cart:", product);
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // const closeCartOverlay = () => {
//   //   setShowCart(false);
//   //   navigate("/cartmain");
//   //   console.log("I worked!!!")
//   // }
//   const closeCartOverlay = () => {
//     console.log("Current location before navigate:", window.location.pathname);
//     setShowCart(false);
//     navigate("/cartmain");
//     console.log("Navigating to /cartmain");
//     setTimeout(() => {
//         console.log("Current location after navigate:", window.location.pathname);
//     }, 1000);
// };

//   useEffect(() => {
//     setShowCart(false);
//   }, [location])

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layer cart={cart} addToCart={addToCart} removeFromCart= {removeFromCart} closeCartOverlay={closeCartOverlay} />}>
//           <Route index element={<Navigate to="home" />} />
//           <Route path="home" element={<Home addToCart= {addToCart} />} />
//           {/* <Route path="cart" element={<Cart cart={cart} cartToggle={cartToggle} setShowCart={setShowCart} removeFromCart= {removeFromCart} />} /> */}
//           <Route path="cart" element={<Cart cart={cart} removeFromCart= {removeFromCart} closeCartOverlay={closeCartOverlay} />} />
//           {/* <Route path="cartmain" element={<CartMain cartMain={cart} removeFromCart= {removeFromCart} />} /> */}
//           <Route path="cartmain" element={<CartMain cartMain={cart} removeFromCart={removeFromCart} />} />

//           <Route path="products" element={<ProductList addToCart= {addToCart} />} />
//           <Route path="checkout" element={<Checkout />} />
//         </Route>
//         <Route path="*" element={<ErrorMsg />} />
//       </Routes>
//     </>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
import Layer from "./components/layout/Layout";
import Home from "./components/main/Home";
import Cart from "./components/main/Cart";
import CartMain from "./components/main/CartMain";
import Checkout from "./components/main/Checkout";
import ProductList from "./components/main/ProductList";

const ErrorMsg = () => {
    return (
        <section className="error-message" style={{ color: "#0B0D17", fontSize: "1.75rem", fontWeight: "Bold", height: "100dvh" }}>
            <h2>404 Error <br /> Page will be live soon!!!</h2>
            <Navigate to="/home">Back to home</Navigate>
        </section>
    );
};

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(products)

    const cartToggle = () => {
        setShowCart((prev) => !prev);
    };

    const addToCart = (product) => {
        console.log("Adding to cart:", product);
        setCart([...cart, product]);
        // setProducts([...products, product]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
        // setProducts(products.filter((item) => item.id !== id));
    };

    // const closeCartOverlay = (event) => {

    //     setShowCart(false);
    //     navigate("/cartmain");
    //     event.preventDefault()

    // };
    const showCartOverlay = () => {
      setShowCart(true);
    };

    const closeCartOverlay = () => {
    //   console.log("Before hiding cart overlay:", showCart);
      setShowCart(false);
    //   console.log("After hiding cart overlay:", showCart);
      navigate("/cartmain");
    };

    useEffect(() => {
        setShowCart(false);
    }, [location]);



    const fetchProducts = async ({ organization_id, reverse_sort, page, size, Appid, Apikey }) => {
        const url = new URL('https://timbu-get-all-products.reavdev.workers.dev/');
        url.searchParams.append('organization_id', organization_id);
        url.searchParams.append('reverse_sort', reverse_sort);
        url.searchParams.append('page', page);
        url.searchParams.append('size', size);
        url.searchParams.append('Appid', Appid);
        url.searchParams.append('Apikey', Apikey);
    
        const response = await fetch(url.toString());
    
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    
        return response.json();
    };

    // const [products, setProducts] = useState([]);
      const [isLoading, setIsLoading] = useState(true);
      const [isEmpty, setIsEmpty] = useState(false);
      const [isError, setIsError] = useState(false);
      const [page, setPage] = useState(1);
  
      useEffect(() => {
          const params = {
              organization_id: '27f6387b9d7b4f4d823cf6c910de5825',
              reverse_sort: 'false',
              page: page,
              size: 6,
              Appid: 'AJ5T733PD8P1NHF',
              Apikey: '2f8b45bc903246de81dfb434c5f3e4ed20240713011223927260'
          };
  
          const getProducts = async () => {
              setIsLoading(true);
              setIsError(false);
              try {
                  const data = await fetchProducts(params);
                  setProducts(data.items);
                  setIsEmpty(data.total === 0);
                  console.log(data)
              } catch (error) {
                  setIsError(true);
              } finally {
                  setIsLoading(false);
              }
          };
  
          getProducts();
      }, [page]);
  
  
  
      if (isLoading) return <div>Loading...</div>;
      if (isError) return <div>Error fetching products</div>;
      if (isEmpty) return <div>No products found</div>;

    return (
        <>
            <Routes>
                <Route path="/" element={<Layer cart={cart} cartToggle={cartToggle} addToCart={addToCart} removeFromCart={removeFromCart} showCartOverlay={showCartOverlay} closeCartOverlay={closeCartOverlay} />}>
                    <Route index element={<Navigate to="home" />} />
                    <Route path="home" element={<Home addToCart={addToCart} />} />
                    <Route path="cart" element={<Cart cart={cart} cartToggle={cartToggle} showCart={showCart} setShowCart={setShowCart} removeFromCart={removeFromCart} closeCartOverlay={closeCartOverlay} />} />
                    <Route path="cartmain" element={<CartMain cartMain={cart} removeFromCart={removeFromCart} />} />
                    <Route path="products" element={<ProductList addToCart={addToCart} />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
                <Route path="*" element={<ErrorMsg />} />
            </Routes>
        </>
    );
};

export default App;
