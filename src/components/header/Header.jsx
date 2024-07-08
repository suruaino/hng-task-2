import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Cart from "../main/Cart";
import menu from "./header-assets/menu.png";
import close from "./header-assets/close.png";
import logo from "./header-assets/logo.svg";
import "./header.css";
import SearchBar from "./header-assets/SearchBar";

import bag from "./header-assets/bag-icon.svg";
import cart from "./header-assets/cart-icon.svg";
import categ from "./header-assets/categ-icon.svg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);
  const location = useLocation();

  const menuToggle = () => {
    setShowNav((prev) => !prev);
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
                    <Link to="/destination" onClick={menuToggle}>
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link to="/crew" onClick={menuToggle}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" onClick={menuToggle}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" onClick={menuToggle}>
                      Subscription
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" onClick={menuToggle}>
                      Help
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" onClick={menuToggle}>
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
                <div className="my-cart">
                  <Link to="/cart" onClick={menuToggle}><img src={cart} alt="" /></Link>

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
                  <Link to="/destination" onClick={menuToggle}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/crew" onClick={menuToggle}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/technology" onClick={menuToggle}>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/technology" onClick={menuToggle}>
                    Subscription
                  </Link>
                </li>
                <li>
                  <Link to="/technology" onClick={menuToggle}>
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
                <div className="my-cart">
                  <Link to="/cart" onClick={menuToggle}>
                  <img src={cart} alt="" />
                  My Cart
                  </Link>

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
