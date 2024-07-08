// import React, { useState, useEffect } from "react";
// import { Link, Outlet, useLocation } from "react-router-dom";
// import Cart from "../main/Cart";
// import menu from "./header-assets/menu.png";
// import close from "./header-assets/close.png";
// import logo from "./header-assets/logo.jpg";
// import "./header.css";
// import SearchBar from "./header-assets/SearchBar";

// import bag from "./header-assets/bag-icon.svg";
// import cartIcon from "./header-assets/cart-icon.svg";
// import categ from "./header-assets/categ-icon.svg";

// const Header = () => {
//   const [showNav, setShowNav] = useState(false);
//   const [showCart, setShowCart] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);
//   const location = useLocation();

//   const menuToggle = () => {
//     setShowNav((prev) => !prev);
//   };
//   const cartToggle = () => {
//     setShowCart((prev) => !prev);
//   };
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const getNavLinkClass = (path) => {
//     const className = location.pathname.startsWith(path) ? "active" : "";
//     return className;
//   };

//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     console.log("Adding to cart:", product);
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   return (
//     <header>
//       {isMobile ? (
//         <>
//           <div className="top">
//             <div className="logo">
//               <img src={logo} alt="Logo" />
//             </div>
//             <img
//               className="menuBtn"
//               src={showNav ? close : menu}
//               alt="Menu Toggle"
//               onClick={menuToggle}
//             />
//             {showNav && (
//               <nav>
//                 <ul>
//                   <li>
//                     <Link to="/home" onClick={menuToggle}>
//                       Home
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/shop" onClick={menuToggle}>
//                       Shop
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/aboutus" onClick={menuToggle}>
//                       About Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/contactus" onClick={menuToggle}>
//                       Contact Us
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/subscription" onClick={menuToggle}>
//                       Subscription
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/help" onClick={menuToggle}>
//                       Help
//                     </Link>
//                   </li>
//                   <li>
//                     <Link to="/login" onClick={menuToggle}>
//                       Login
//                     </Link>
//                   </li>
//                 </ul>
//               </nav>
//             )}
//           </div>
//           <div className="bottom">
//             <p>
//               <i>Books Are a Portal To a Different World</i>
//             </p>

//             <div className="action">
//               <div className="left">
//                 <button>
//                   <img src={categ} alt="" />
//                 </button>
//                 {/* <p>Categories</p> */}
//               </div>

//               <div className="center">
//                 <SearchBar />
//               </div>

//               <div className="right">
//                 <div className="wishlist">
//                   <button><img src={bag} alt="" /></button>
                  
//                 </div>
//                 <div className="my-cart relative">
                  
//                   <Link to="/" onClick={cartToggle}><img src={cartIcon} alt="" /></Link>
//                   {/* <div className="cart-content absolute"> */}
//                     {/* <h2>My Cart</h2> */}
            
//                     <Cart className="test-cart" cart={Cart} removeFromCart={removeFromCart} />
//                   {/* </div> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           <div className="top">
//             <div className="logo">
//               <img src={logo} alt="Logo" />
//             </div>
//             <nav>
//               <ul>
//                 <li>
//                   <Link to="/home" onClick={menuToggle}>
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/shop" onClick={menuToggle}>
//                     Shop
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/aboutus" onClick={menuToggle}>
//                     About Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contactus" onClick={menuToggle}>
//                     Contact Us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/subscription" onClick={menuToggle}>
//                     Subscription
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/login" onClick={menuToggle}>
//                     Login
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div>

//           <div className="bottom">
//             <p>
//               <i>Books Are a Portal To a Different World</i>
//             </p>

//             <div className="action">
//               <div className="left">
//                 <button>
//                   <img src={categ} alt="" />
//                 </button>
//                 <p>Categories</p>
//               </div>

//               <div className="center">
//                 <SearchBar />
//               </div>

//               <div className="right">
//                 <div className="wishlist">
//                   <Link>
//                   <img src={bag} alt="" />
//                   Wishlist
//                   </Link>
//                 </div>
//                 <div className="my-cart relative">
//                   <Link to="/" onClick={cartToggle}>
//                   <img src={cartIcon} alt="" />
//                   My Cart
//                   </Link>
//                   {/* <div className="cart-content absolute"> */}
//                     {/* <h2>My Cart</h2> */}
//                     {/* <Cart cart={Cart} removeFromCart={removeFromCart} /> */}
//                   {/* </div> */}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Cart from "../main/Cart";
import menu from "./header-assets/menu.png";
import close from "./header-assets/close.png";
import logo from "./header-assets/logo.jpg";
import "./header.css";
import SearchBar from "./header-assets/SearchBar";

import bag from "./header-assets/bag-icon.svg";
import cartIcon from "./header-assets/cart-icon.svg";
import categ from "./header-assets/categ-icon.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);
  const location = useLocation();

  const menuToggle = () => {
    setShowNav((prev) => !prev);
  };
  const cartToggle = () => {
    setShowCart((prev) => !prev);
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

  const getNavLinkClass = (path) => {
    const className = location.pathname.startsWith(path) ? "active" : "";
    return className;
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    console.log("Adding to cart:", product);
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <header>
      {isMobile ? (
        <>
          <div className="top">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <img
              className="menuBtn"
              src={showNav ? close : menu}
              alt="Menu Toggle"
              onClick={menuToggle}
            />
            {showNav && (
              <nav>
                <ul>
                  <li>
                    <Link to="/home" onClick={menuToggle}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop" onClick={menuToggle}>
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/aboutus" onClick={menuToggle}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={menuToggle}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/subscription" onClick={menuToggle}>
                      Subscription
                    </Link>
                  </li>
                  <li>
                    <Link to="/help" onClick={menuToggle}>
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" onClick={menuToggle}>
                      Login
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <div className="bottom">
            <p>
              <i>Books Are a Portal To a Different World</i>
            </p>

            <div className="action">
              <div className="left">
                <button>
                  <img src={categ} alt="" />
                </button>
                {/* <p>Categories</p> */}
              </div>

              <div className="center">
                <SearchBar />
              </div>

              <div className="right">
                <div className="wishlist">
                  <button><img src={bag} alt="" /></button>
                  
                </div>
                <div className="my-cart relative">
                  
                  <Link to="/" onClick={cartToggle}><img src={cartIcon} alt="" /></Link>
                  {showCart && (
                    <Cart className="test-cart" cart={cart} removeFromCart={removeFromCart} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="top">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/home" onClick={menuToggle}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop" onClick={menuToggle}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" onClick={menuToggle}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contactus" onClick={menuToggle}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/subscription" onClick={menuToggle}>
                    Subscription
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={menuToggle}>
                    Login
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="bottom">
            <p>
              <i>Books Are a Portal To a Different World</i>
            </p>

            <div className="action">
              <div className="left">
                <button>
                  <img src={categ} alt="" />
                </button>
                <p>Categories</p>
              </div>

              <div className="center">
                <SearchBar />
              </div>

              <div className="right">
                <div className="wishlist">
                  <Link>
                  <img src={bag} alt="" />
                  Wishlist
                  </Link>
                </div>
                <div className="my-cart relative">
                  <Link to="/" onClick={cartToggle}>
                  <img src={cartIcon} alt="" />
                  My Cart
                  </Link>
                  {showCart && (
                    <Cart className="test-cart" cart={cart} removeFromCart={removeFromCart} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
