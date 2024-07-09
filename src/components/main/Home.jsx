
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";

const Home = ( {addToCart} ) => {
    const [cart, setCart] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);

    const cartToggle = () => {
        setShowCart((prev) => !prev);
      };

    const removeFromCart = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    };

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return(
        <div className="product-listing">
          {isMobile ? (
          <nav className="product-nav">
          {/* <ul className="category-container">
                      <li>
                        <Link>Non-Fiction</Link>
                      </li>
                      <li>
                        <Link>Fiction</Link>
                      </li>
                      <li>
                        <Link>Business</Link>
                      </li>
                      <li>
                        <Link>Poetry</Link>
                      </li>
                      <li>
                        <Link>Children</Link>
                      </li>
                      <li>
                        <Link>Education</Link>
                      </li>
                      <li>
                        <Link>Religous</Link>
                      </li>
                    </ul> */}
                    </nav>
          ):(
            <nav className="product-nav">
          <ul className="category-container">
                      <li>
                        <Link>Non-Fiction</Link>
                      </li>
                      <li>
                        <Link>Fiction</Link>
                      </li>
                      <li>
                        <Link>Business</Link>
                      </li>
                      <li>
                        <Link>Poetry</Link>
                      </li>
                      <li>
                        <Link>Children</Link>
                      </li>
                      <li>
                        <Link>Education</Link>
                      </li>
                      <li>
                        <Link>Religous</Link>
                      </li>
                    </ul>
                    </nav>
          )
}
          <ProductList  addToCart={addToCart} />
        </div>
    )
}

export default Home;