
import { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
      console.log("Adding to cart:", product);
      setCart([...cart, product]);
    };
  
    const removeFromCart = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    };

    return(
        <div className="Product-listing">
            {/* <p>I Be home</p> */}
            {/* <Cart cart={cart} removeFromCart={removeFromCart} style={{backgroundColor: "red"}} /> */}
            <ProductList  addToCart={addToCart} />
        </div>
    )
}

export default Home;