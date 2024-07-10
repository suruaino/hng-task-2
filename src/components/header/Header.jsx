import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Cart from "../main/Cart";
import menu from "./header-assets/menu.png";
import close from "./header-assets/close.png";
import logo from "./header-assets/logo.jpg";
import home from "../main/Home";
import "./header.css";
import SearchBar from "./header-assets/SearchBar";

import bag from "./header-assets/bag-icon.svg";
import cartIcon from "./header-assets/cart-icon.svg";
import categ from "./header-assets/categ-icon.svg";

const Header = ({ cart = [], cartToggle, showCart, removeFromCart }) => {
  const [showNav, setShowNav] = useState(false);
  // const [showCart, setShowCart] = useState(false);
  const [showCateg, setShowCateg] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);
  const location = useLocation();

  const menuToggle = () => {
    setShowNav((prev) => !prev);
  };

  // const cartToggle = () => {
  //   setShowCart((prev) => !prev);
  
  // };

  const categToggle = () => {
    setShowCateg((prev) => !prev);
  };
  const wishToggle = () => {
    setShowWishlist((prev) => !prev);
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

  // const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   console.log("Adding to cart:", product);
  //   setCart([...cart, product]);
  // };

  // const removeFromCart = (id) => {
  //   setCart(Cart.filter((item) => item.id !== id));
  // };

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
                <button onClick={categToggle}>
                  <img src={categ} alt="" />
                </button>
                {showCateg && (
                  <nav className="categ-nav">
                    <h2>Categories</h2>
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
                )}
              </div>

              <div className="center">
                <SearchBar />
              </div>

              <div className="right">
                <div className="wishlist">
                  <Link>
                    <button onClick={wishToggle}>
                      <img src={bag} alt="" />
                    </button>
                  </Link>
                  {showWishlist && (
                    <div className="wishlist-container">
                      <h2>Wishlist</h2>
                      {cart.length === 0 ? (
                        <>
                          <i>There's nothing in your Wishlist</i>
                          <button>Back to shop</button>
                        </>
                      ) : (
                        <>
                          <button>Back to shop</button>
                        </>
                      )}
                    </div>
                  )}
                </div>
                <div className="my-cart relative">
                  <Link to="/" onClick={cartToggle}>
                    <img src={cartIcon} alt="" />
                  </Link>
                  {showCart && (
                    <Cart
                      className="test-cart"
                      cart={cart}
                      removeFromCart={removeFromCart}
                    />
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
                <button onClick={categToggle}>
                  <img src={categ} alt="" />
                </button>

                <p>Categories</p>
                {showCateg && (
                  <nav className="categ-nav">
                    <h2>Categories</h2>
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
                )}
              </div>

              <div className="center">
                <SearchBar />
              </div>

              <div className="right">
                <div className="wishlist">
                  {/* <Link> */}
                  <button
                    className="flex gap-2 items-center text-xl font-semibold"
                    onClick={wishToggle}
                  >
                    <img src={bag} alt="" />
                    Wishlist
                  </button>
                  {/* </Link> */}
                  {showWishlist && (
                    <div className="wishlist-container">
                      <h2>Wishlist</h2>
                      {cart.length === 0 ? (
                        <>
                          <i>There's nothing in your Wishlist</i>
                          <Link to="/home">Back to shop</Link>
                        </>
                      ) : (
                        <>
                          <Link to={home}>Back to shop</Link>
                        </>
                      )}
                    </div>
                  )}
                </div>
                <div className="my-cart relative">
                  <Link to="/" onClick={cartToggle}>
                    <img src={cartIcon} alt="" />
                    My Cart
                  </Link>
                  {showCart && (
                    <Cart
                      className="test-cart"
                      cart={cart}
                      removeFromCart={removeFromCart}
                    />
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
