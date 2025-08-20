"use client";
import React from "react";
import Footer from "../components/Footer/Footer";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
   const router = useRouter();
  return (
    <>
      <div className="checkout-page">
        <div className="checkout-header">
          <div className="checkout-logo">
            <img
              src="/assets/Images/logo.png"
              alt="Green Vine Market"
              onClick={() => router.push("/")}
            />
          </div>
        </div>

        <div className="checkout-main">
          <div className="delivery-card">
            <h2>Delivery Information</h2>
            <p className="sub-text">
              All Fields Required Unless indicated Optional
            </p>
            <form className="delivery-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" placeholder="First Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" placeholder="Last Name" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="text" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="altPhone">Alternate Phone (Optional)</label>
                  <input
                    id="altPhone"
                    type="text"
                    placeholder="Alternate Phone"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input id="address" type="text" placeholder="Address" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="zip">Zip Code</label>
                  <input id="zip" type="text" placeholder="Zip Code" />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input id="state" type="text" placeholder="State" />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input id="city" type="text" placeholder="City" />
                </div>
              </div>
            </form>
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
              <div className="zipcode">
                <p>Add Zip Code </p>
                <span>
                  <IoIosArrowDown color="#595959" size={15} />
                </span>
              </div>
              <div className="price-total">
                <span>Total</span>
                <span>$26.98</span>
              </div>
            </div>
            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
