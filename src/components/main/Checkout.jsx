
import {Link} from 'react-router-dom';
import './checkout.css'
import paystackImg from './main-assets/paystack.png';
import flutterwaveImg from './main-assets/flutterwave.png';
import keyImg from './main-assets/key.svg';
//I made use of css grid in this chckout page...
const Checkout = () => {

    return (
      <div className="checkout">
        <div className="checkout__container mt-4 mb-16">
          <div className="checkout__header">
            <h2 className="text-2xl font-medium mb-5">Checkout</h2>
          </div>
          <main className="checkout__main-content flex flex-col items-center">
            <div className="top">
              <p>
                Are you a returning customer? <Link to="/login">Login</Link>
              </p>
            </div>
            <div className="checkout__bottom mt-4 flex flex-col gap-8 md:gap-0 items-center md:flex-row">
              <form className="bottom__left flex flex-col items-start">
                <h3 className="font-semibold mb-5">Billing Details</h3>
                {/* <div className="bottom__form-input-box flex flex-col gap-2"> */}
                <div className="bottom__form-input-box">
                  <div>
                    <label>First Name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Country</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>State</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>City</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Residential Address</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Phone No</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Email Address</label>
                    <input type="text" />
                  </div>
                  <div>
                    <span className="custom-checkbox"></span>
                    <input type="checkbox" />
                    <label>Create an Account</label>
                  </div>
                  <div>
                    <label>Additional Infomation</label>
                    <textarea
                      name=""
                      id=""
                      placeholder="Add notes about your order (e.g special notes about your delivery"
                    ></textarea>
                  </div>
                </div>
              </form>

              <div className="bottom__right order  pt-2 md:px-2 md:mr-12 flex flex-col gap-2">
                <h3 className="order__header font-semibold">Your Order</h3>
                <div className="order__subheader font-semibold flex justify-between">
                  <span>Product</span>
                  <span>Subtotal</span>
                </div>
                <form action="" className="order__form">
                  <div className="order__item-details font-normal flex flex-col ">
                    <div className="order__calculations font-normal flex justify-between ">
                      <span>{"Item name"}</span>
                      <span>#{0}</span>
                    </div>
                    <div className="order__sub-total flex justify-between">
                      <span>Subtotal</span>
                      <span>
                        #{0}
                        {/*subTotal*/}
                      </span>
                      {/* <span>{quantity * item.price}</span> */}
                    </div>

                    <div className="order__shipping flex justify-between">
                      <span>Shipping</span>
                      <span>#{0}</span>
                    </div>
                    <div className="total text-xl font-bold py-2 flex justify-between">
                      <span>Total</span>
                      <span>
                        #{0}
                        {/*total*/}
                      </span>
                    </div>
                  </div>
                  <section className="order__coupon flex flex-col gap-2 mt-4">
                    <label className="font-semibold">Have a coupon code?</label>
                    <input className="" type="text" placeholder="Coupon Code" />
                    <button className="font-bold mt-2">Apply Coupon</button>
                  </section>
                  <section className="payment-type flex flex-col gap-2 my-4">
                    <div className="paystack">
                      <div className="paystack__input-box flex gap-2">
                        <span className="radio-custom-btn"></span>
                        <input type="radio" name="payment-type" />
                        <label htmlFor="" className="font-semibold">
                          Paystack
                        </label>
                      </div>
                      <div className="paystack__img-bx">
                        <p>
                          Secured by <span>Paystack</span>
                        </p>
                        <img src={paystackImg} alt="" className="w-60" />
                      </div>
                    </div>

                    <div className="flutterwave">
                      <div className="flutterwave__input-box flex gap-2">
                        <span className="radio-custom-btn"></span>
                        <input type="radio" name="payment-type" />
                        <label htmlFor="" className="font-semibold">
                          Flutterwave
                        </label>
                      </div>
                      <div className="flutterwave__img-bx">
                        <p>
                          <img src={keyImg} />
                          Trusted by <span>Flutterwave</span>
                        </p>
                        <img src={flutterwaveImg} alt="" className="w-60" />
                      </div>
                    </div>

                    <div className="finallize flex flex-col gap-4 mt-4">
                      <p className='text-sm'>
                        Your personal data will be used to process your order,
                        support your experience throughout this website, and for
                        other purposes described in our <Link>privacy policy.</Link>
                      </p>
                      <button className='text-xl font-bold'>Place Order</button>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
}

export default Checkout;