import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "./styles.css";
import "./cartmainitem.css";
import CartMainItem from "./CartMainItem";

const CartMain = ({ cartMain, removeFromCart }) => {
  const [quantity, setQuantity] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 485);
  // const subTotal = cartMain.reduce(
  //   (sum, item) => parseFloat(sum + item.price),
  //   0
  // );
  const subTotal = cartMain.reduce((sum, item) => {
    const price = parseFloat(item?.current_price[0]?.NGN[0]) || 0;
    return sum + price;
  }, 0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePositiveClick = () => {
    setQuantity(quantity + 1);
    console.log(quantity);
  };
  const handleNegativeClick = () => {
    setQuantity(quantity - 1);
    console.log(quantity);
  };

  return (
    <section className="cart-main">
      <h2>Cart</h2>
      {isMobile ? (
        <div className="cart-main__container flex flex-col">
          <div className="cart-main__product-box w-full">
            <header className="w-full">
              <span className="products w-3/5">Product</span>
              <div className="others w-2/5">
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>
            </header>

            <div className="cart-main__box">
              {cartMain.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cartMain.map((item) => (
                  <CartMainItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                    handleNegativeClick={handleNegativeClick}
                    handlePositiveClick={handlePositiveClick}
                    quantity={quantity}
                    subTotal={subTotal}
                  />
                ))
              )}
            </div>

            <div className="cart-nav-btn-box">
              <Link to="/home">Back To Shop</Link>
              <Link>Update Cart</Link>
            </div>
          </div>

          <div className="cart-main__total-box w-full">
            <header>
              <h2>Cart Totals</h2>
            </header>
            <div className="calculations">
              <div className="sub-total">
                <span>Subtotal</span>
                <span>{subTotal}</span>
              </div>

              <div className="calculate">
                <span>Calculate</span>
                <span>Shipping</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>{/*total*/}</span>
              </div>
            </div>
          </div>
          <div className="cart-calc-btn-box">
            <Link>Coupon Code</Link>
            <Link>Apply Coupon</Link>
            <Link to="/checkout">Proceed To Check Out</Link>
          </div>
        </div>
      ) : (
        <div className="cart-main__container">
          <div className="cart-main__product-box w-2/3">
            <header>
              <span className="products">Product</span>
              <div className="others">
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>
            </header>

            <div className="cart-main__box">
              {cartMain.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                cartMain.map((item) => (
                  <CartMainItem
                    key={item.id}
                    item={item}
                    removeFromCart={removeFromCart}
                    handleNegativeClick={handleNegativeClick}
                    handlePositiveClick={handlePositiveClick}
                    quantity={quantity}
                    subTotal={subTotal}
                  />
                ))
              )}
            </div>

            <div className="cart-nav-btn-box">
              <Link to="/home">
                <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
                To Shop
              </Link>
              <Link>Update Cart</Link>
            </div>
          </div>

          <div className="cart-main__total-box w-4/12">
            <header>
              <h2>Cart Totals</h2>
            </header>
            <div className="calculations">
              <div className="sub-total">
                <span>Subtotal</span>
                <span>#{subTotal}</span>
                {/* <span>{quantity * item.price}</span> */}
              </div>

              <div className="calculate">
                <span>Calculate</span>
                <span>Shipping</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>{/*total*/}</span>
              </div>
            </div>

            <div className="cart-calc-btn-box">
            <Link>Coupon Code</Link>
            <Link>Apply Coupon</Link>
            <Link to="/checkout">Proceed To Check Out</Link>
          </div>
          </div>

        </div>
      )}
    </section>
  );
};

export default CartMain;
