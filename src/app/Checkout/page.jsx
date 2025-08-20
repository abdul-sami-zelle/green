"use client";
import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FiCreditCard, FiX } from "react-icons/fi";
import MobileSubHeader from "../../components/MobileSubHeader/MobileSubHeader";

export default function CheckoutPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showPaypal, setShowPaypal] = useState(false);
  const [showZip, setShowZip] = useState(false);

  const handlePaypalSelect = () => {
    setPaymentMethod("paypal");
    setShowPaypal(true);
  };

  const handleClosePaypal = () => {
    setShowPaypal(false);
    setPaymentMethod("card");
  };

  return (
    <>
      <MobileSubHeader
        title="Checkout"
        showSearch={false}
        showCart={false}
        showBack={true}
      />
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="checkout-logo">
            {/* <img
              src="/assets/Images/logo.png"
              alt="Delco Farmers Market"
              onClick={() => router.push("/")}
            /> */}
          </div>
        </div>

        <div className="checkout-main">
          <div className="delivery-card">
            <h2>Payment Information</h2>
            <p className="sub-text">
              All Fields Required Unless indicated Optional
            </p>

            <div className="payment-toggle-field">
              <label className="toggle-option">
                <span
                  className={`custom-radio ${
                    paymentMethod === "card" ? "active" : ""
                  }`}
                />
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <span>Credit/Debit Card</span>
                <FiCreditCard
                  size={18}
                  color="#595959"
                  style={{ marginLeft: "auto" }}
                />
              </label>

              <label className="toggle-option">
                <span
                  className={`custom-radio ${
                    paymentMethod === "paypal" ? "active" : ""
                  }`}
                />
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                />
                <span>Paypal</span>
                <img
                  src="/assets/Icons/paypal.svg"
                  className="paypal-icon"
                  alt=""
                />
              </label>
            </div>
            <div className="card-logos">
              <img src="/assets/Icons/american.svg" alt="American Express" />
              <img src="/assets/Icons/master.svg" alt="Mastercard" />
              <img src="/assets/Icons/discover.svg" alt="Discover" />
              <img src="/assets/Icons/visa.svg" alt="Visa" />
            </div>

            <form className="delivery-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Card Holder’s Name</label>
                  <input type="text" placeholder="Card Holder’s Name" />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="Card Number" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>CVV</label>
                  <input type="text" placeholder="CVV" />
                </div>
                <div className="form-group">
                  <label>Exp Date</label>
                  <input type="text" placeholder="Exp Date" />
                </div>
              </div>
            </form>

            {paymentMethod === "paypal" && (
              <div className="paypal-popup" onClick={handleClosePaypal}>
                <div
                  className="paypal-modal"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="paypal-close" onClick={handleClosePaypal}>
                    <FiX size={22} />
                  </button>

                  <div className="paypal-header">
                    <img
                      src="/assets/Icons/paypal.svg"
                      alt="PayPal"
                      className="paypal-logo"
                    />
                  </div>
                  <div className="paypal-body">
                    <h3 className="paypal-title">Pay with PayPal</h3>
                    <p className="paypal-desc">
                      Fast, secure and easy checkout. You will be redirected to
                      PayPal to complete your purchase safely.
                    </p>
                    <button className="paypal-btn">Proceed to PayPal</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-item">
              <img src="/assets/Images/beef1.jpg" alt="Product" />
              <div className="title-desc">
                <p className="item-title">Halal Ground Beef 90/10</p>
                <p className="item-desc">
                  Fresh Beef Patty 80/20. (4 patties per package)
                </p>
              </div>
              <span className="item-price">$6.99</span>
            </div>

            <div className="order-item">
              <img src="/assets/Images/beef2.jpg" alt="Product" />
              <div className="title-desc">
                <p className="item-title">Halal Ground Beef 90/10</p>
                <p className="item-desc">
                  Fresh Beef Patty 80/20. (4 patties per package)
                </p>
              </div>
              <span className="item-price">$6.99</span>
            </div>

            <div className="border-container">
              <div className="price-row">
                <span>Sub Total</span>
                <span>$13.98</span>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="price-row">
                <span>Tax</span>
                <span>$8.00</span>
              </div>
              <div className="zipcode" onClick={() => setShowZip(!showZip)}>
                <p>Add Zip Code </p>
                <span>
                  {showZip ? (
                    <IoIosArrowUp color="#595959" size={15} />
                  ) : (
                    <IoIosArrowDown color="#595959" size={15} />
                  )}
                </span>
              </div>

              <div className={`zipcode-input-wrapper ${showZip ? "open" : ""}`}>
                <div className="zipcode-input">
                  <input type="text" placeholder="Zip Code" />
                  <button>Update</button>
                </div>
              </div>
              <div className="price-total">
                <span>Total</span>
                <span>$26.98</span>
              </div>
            </div>
            <button className="continue-btn">Place Order</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
