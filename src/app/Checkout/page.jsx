"use client";
import React, { useContext, useState } from "react";
import Footer from "../../components/Footer/Footer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/navigation";
import MobileSubHeader from "../../components/MobileSubHeader/MobileSubHeader";
import { CartContext } from "../../context/addToCart";
import { FiCreditCard, FiX } from "react-icons/fi";

export default function Checkout() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showPaypal, setShowPaypal] = useState(false);
  const [showZip, setShowZip] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState("delivery");
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    zip: "",
    state: "",
    city: "",
  });
  const [paymentValues, setPaymentValues] = useState({
    cardName: "",
    cardNumber: "",
    cvv: "",
    expDate: "",
  });

  const { cart } = useContext(CartContext);

  const handlePaymentChange = (e) => {
    setPaymentValues({ ...paymentValues, [e.target.id]: e.target.value });
  };

  const getNumericPrice = (price) =>
    parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;

  const subtotal = cart.reduce(
    (acc, item) => acc + getNumericPrice(item.price) * item.quantity,
    0
  );
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const shipping = 5.0;
  const tax = 8.0;
  const total = subtotal + shipping + tax;

  const handleDeliveryContinue = () => {
    const { firstName, lastName, phone, address, zip, state, city } =
      formValues;
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !address ||
      !zip ||
      !state ||
      !city
    ) {
      alert("Please fill all required fields before proceeding to Payment.");
      return;
    }
    setActiveTab("payment");
  };
  const handlePaymentSubmit = () => {
    const { cardName, cardNumber, cvv, expDate } = paymentValues;

    if (paymentMethod === "card") {
      if (!cardName || !cardNumber || !cvv || !expDate) {
        alert("Please fill all required card fields before continuing.");
        return;
      }
    }

    router.push("/order-confirmation");
  };

  return (
    <>
      <MobileSubHeader
        title="Check Out"
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
          </div>{" "}
        </div>

        <div className="checkout-main">
          <div style={{ flex: "2 1" }}>
            <div className="tabs-header">
              <label
                className={`tab-option ${
                  activeTab === "delivery" ? "active" : ""
                }`}
                onClick={() => setActiveTab("delivery")}
              >
                <span>
                  Delivery <span className="info-text">Information</span>
                </span>
                <span className="custom-radio">
                  {activeTab === "delivery" && <span className="dot" />}
                </span>
              </label>

              <label
                className={`tab-option ${
                  activeTab === "payment" ? "active" : ""
                }`}
                onClick={() => {
                  if (activeTab === "payment") return;
                  alert("Please fill delivery information first.");
                }}
              >
                <span>
                  Payment <span className="info-text">Information</span>
                </span>
                <span className="custom-radio">
                  {activeTab === "payment" && <span className="dot" />}
                </span>
              </label>
            </div>

            {activeTab === "delivery" && (
              <div className="delivery-card">
                <h2>Delivery Information</h2>
                <p className="sub-text">
                  All Fields Required Unless indicated Optional
                </p>
                <form className="delivery-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        value={formValues.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formValues.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Phone"
                        value={formValues.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="altPhone">
                        Alternate Phone (Optional)
                      </label>
                      <input
                        id="altPhone"
                        type="text"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        placeholder="Alternate Phone"
                        value={formValues.altPhone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        id="address"
                        type="text"
                        placeholder="Address"
                        value={formValues.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="zip">Zip Code</label>
                      <input
                        id="zip"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength="6"
                        placeholder="Zip Code"
                        value={formValues.zip}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="state">State</label>
                      <input
                        id="state"
                        type="text"
                        placeholder="State"
                        value={formValues.state}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">City</label>
                      <input
                        id="city"
                        type="text"
                        placeholder="City"
                        value={formValues.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </form>
              </div>
            )}

            {activeTab === "payment" && (
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
                  <img
                    src="/assets/Icons/american.svg"
                    alt="American Express"
                  />
                  <img src="/assets/Icons/master.svg" alt="Mastercard" />
                  <img src="/assets/Icons/discover.svg" alt="Discover" />
                  <img src="/assets/Icons/visa.svg" alt="Visa" />
                </div>

                <form className="delivery-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Card Holder’s Name</label>
                      <input
                        id="cardName"
                        type="text"
                        placeholder="Card Holder’s Name"
                        value={paymentValues.cardName}
                        onChange={handlePaymentChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        id="cardNumber"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        placeholder="Card Number"
                        value={paymentValues.cardNumber}
                        onChange={handlePaymentChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        id="cvv"
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        maxLength="4"
                        placeholder="CVV"
                        value={paymentValues.cvv}
                        onChange={handlePaymentChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Exp Date</label>
                      <input
                        id="expDate"
                        type="month"
                        placeholder="Expiry Date"
                        value={paymentValues.expDate}
                        onChange={handlePaymentChange}
                      />
                    </div>
                  </div>
                </form>

                {paymentMethod === "paypal" && (
                  <div className="paypal-popup">
                    <div className="paypal-modal">
                      <button
                        className="paypal-close"
                        onClick={() => setPaymentMethod("card")}
                      >
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
                          Fast, secure and easy checkout. You will be redirected
                          to PayPal to complete your purchase safely.
                        </p>
                        <button className="paypal-btn">
                          Proceed to PayPal
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="order-summary-item-container">
              {cart.length === 0 ? (
                <p className="cart-empty-text">Your Cart is Empty!</p>
              ) : (
                (showAll ? cart : cart.slice(0, 2)).map((item) => {
                  const price = getNumericPrice(item.price);
                  const totalItem = (price * item.quantity).toFixed(2);
                  return (
                    <div className="order-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div className="title-desc">
                        <p className="item-title">{item.name}</p>
                        <p className="item-desc">{item.description}</p>
                        <p className="item-desc">Quantity: {item.quantity}</p>
                      </div>
                      <span className="item-price">${totalItem}</span>
                    </div>
                  );
                })
              )}
            </div>

            {cart.length > 2 && (
              <div className="view-all-btn-container">
                <button
                  className="view-all-btn"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "View Less" : "View All"}
                </button>
              </div>
            )}

            <div className="border-container">
              <div className="price-row">
                <span>Sub Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="price-row">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
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
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {activeTab === "delivery" ? (
              <button className="continue-btn" onClick={handleDeliveryContinue}>
                Continue
              </button>
            ) : (
              <button className="continue-btn" onClick={handlePaymentSubmit}>
                Place Order
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mobile-continue-btn-container">
        <div className="price-total">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <span className="Order-placing-text">
          By placing this order I agree to the Delco Farmers Market{" "}
          <a href="/TermsCondition" className="termsconditions">
            Terms & Conditions
          </a>
        </span>
        {activeTab === "delivery" ? (
          <button
            className="mobile-continue-btn"
            onClick={handleDeliveryContinue}
          >
            Continue
          </button>
        ) : (
          <button className="mobile-continue-btn" onClick={handlePaymentSubmit}>
            Place Order
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}
