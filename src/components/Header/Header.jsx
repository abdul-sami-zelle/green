"use client";
import { useState, useEffect, useContext } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { CartContext } from "../../context/addToCart";
// import DeliveryModal from "../DeliveryModal/DeliveryModal"
import "./style.css";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const [showTopbarSecond, setShowTopbarSecond] = useState(false);
  const [showSubheaderRight, setShowSubheaderRight] = useState(false);
  const [showLogoCart, setShowLogoCart] = useState(false);
  const [showLogoCartSearch, setShowLogoCartSearch] = useState(false);
  // const [showDeliveryModal, setShowDeliveryModal] = useState(false);

  const { setShowSideCart } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShowTopbarSecond(scrollY > 200);
      setShowSubheaderRight(scrollY > 350);

      setShowLogoCart(scrollY > 50);
      setShowLogoCartSearch(scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="header">
        <div className="topbar-container">
          {!showTopbarSecond && (
            <div className="topbar">
              <div className="hamburger-btn">
                <button
                  className="hamburger"
                  onClick={() => setShowSidebar(true)}
                >
                  <HiMenuAlt1 />
                </button>
              </div>

              <div className="topbar-center">
                <h1 className="market-title">Delco Farmers Market</h1>
                <button
                  className="more-info"
                  onClick={() => setShowModal(true)}
                >
                  • More Info
                </button>
              </div>

              <div className="topbar-right">
                <button className="btn sign-in" onClick={() => setShowSidebar(true)}>Sign In</button>
                <button
                  className="btn cart"
                  onClick={() => setShowSideCart(true)}
                >
                  <span>
                    <PiShoppingCartSimple />
                  </span>
                  Cart
                </button>
              </div>
            </div>
          )}
          {!showLogoCart && !showLogoCartSearch && (
            <div className="mobile-cart-button">
              <button
                className="btn cart"
                onClick={() => setShowSideCart(true)}
              >
                <span>
                  <PiShoppingCartSimple />
                </span>
                Cart
              </button>
            </div>
          )}

          {showLogoCart && !showLogoCartSearch && (
            <div className="mobile-second-cart-button">
              <div className="logo-small-mobile">
                <img src="/assets/Images/logo.png" alt="" />
              </div>
              <button
                className="btn cart"
                onClick={() => setShowSideCart(true)}
              >
                <span>
                  <PiShoppingCartSimple />
                </span>
                Cart
              </button>
            </div>
          )}

          {showLogoCartSearch && (
            <div className="header-with-search">
              <div className="mobile-second-cart-button">
                <div className="logo-small-mobile">
                  <img src="/assets/Images/logo.png" alt="" />
                </div>
                <button
                  className="btn cart"
                  onClick={() => setShowSideCart(true)}
                >
                  <span>
                    <PiShoppingCartSimple />
                  </span>
                  Cart
                </button>
              </div>
              <div className="search-mobile-box">
                <span>
                  <IoSearch />
                </span>
                <input type="text" placeholder="Search Product" />
              </div>
            </div>
          )}

          {showTopbarSecond && (
            <div className="topbar-second">
              <div className="topbar-second-left">
                <div className="hamburger-btn-second">
                  <button
                    className="hamburger"
                    onClick={() => setShowSidebar(true)}
                  >
                    <HiMenuAlt1 />
                  </button>
                </div>
                <div className="logo-small">
                  <img src="/assets/Images/logo.png" alt="" />
                </div>
                <div className="search-box-second">
                  <span>
                    <IoSearch />
                  </span>
                  <input type="text" placeholder="Search product" />
                </div>
              </div>

              <div className="topbar-second-right">
                {showSubheaderRight && (
                  <div className="sub-header-right">
                    <div className="sub-header-right-buttons">
                      <button className="active">
                        <span>
                          <img src="/assets/Icons/truck.svg" alt="" />
                        </span>{" "}
                        Delivery
                      </button>
                      <button>
                        <span>
                          <img src="/assets/Icons/pickup.svg" alt="" />
                        </span>{" "}
                        Pickup
                      </button>
                    </div>
                    <div className="location">
                      Delivery to:{" "}
                      <span>
                        Council Bluffs, United States{" "}
                        <span>
                          <MdKeyboardArrowDown className="down-icon" />
                        </span>
                      </span>
                    </div>
                  </div>
                )}

                <button className="btn sign-in" onClick={() => setShowSidebar(true)}>Sign In</button>
                <button
                  className="btn cart"
                  onClick={() => setShowSideCart(true)}
                >
                  <span>
                    <PiShoppingCartSimple />
                  </span>
                  Cart
                </button>
              </div>
            </div>
          )}
        </div>
        {/* 
        <div className="logo">
          <img src="/assets/Images/logo.png" alt="" />
          <div className="topbar-center">
            <h1 className="green-market-title">Delco Farmers Market</h1>
          </div>
        </div> */}
        <div className="search-box">
          <span>
            <IoSearch />
          </span>
          <input type="text" placeholder="Search product" />
        </div>

        {showModal && (
          <div className="modal-overlay" onClick={() => setShowModal(false)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                aria-label="Close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>

              <div className="modal-head-center">
                <img src="/assets/Images/logo.png" alt="Delco Farmers Market" />
                <h2>Delco Farmers Market</h2>
                <p className="subtext">Fresh • Quality • Local</p>
              </div>

              <p className="modal-intro">
                We’re a neighborhood market focused on fresh produce, trusted
                meats, and everyday essentials — delivered to your door or ready
                for pickup. No fluff, just good food you can count on.
              </p>

              <div className="modal-grid">
                <div className="modal-item">
                  <h4>What we do</h4>
                  <ul>
                    <li>Daily-picked fruits & vegetables</li>
                    <li>Halal-certified meats & pantry</li>
                    <li>Fresh bakery & ready meals</li>
                    <li>Delivery & curbside pickup</li>
                  </ul>
                </div>
                <div className="modal-item">
                  <h4>Store hours</h4>
                  <ul>
                    <li>Mon–Sat: 8:00 AM – 9:00 PM</li>
                    <li>Sunday: 9:00 AM – 7:00 PM</li>
                    <li>Same-day delivery (selected areas)</li>
                  </ul>
                </div>
              </div>

              <div className="modal-cta">
                <button
                  className="btn-primary"
                  onClick={() => setShowModal(false)}
                >
                  Start Shopping
                </button>
                <button
                  className="btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {showSidebar && (
          <div
            className="sidebar-overlay"
            onClick={() => setShowSidebar(false)}
          >
            <div className="sidebar" onClick={(e) => e.stopPropagation()}>
              <div className="sidebar-header">
                <img src="/assets/Images/logo.png" alt="logo" />
                <h2>Delco Farmers Market</h2>
              </div>

              <div className="sidebar-links">
                <p
                  onClick={() => {
                    setShowSidebar(false);
                    setShowModal(true);
                  }}
                >
                  Store Info
                </p>
                <p className="delivery">
                  <span>
                    <LiaTruckMovingSolid className="truck-icon" />
                  </span>
                  <span> Delivery</span>United States
                  <span className="down-icon">
                    <MdKeyboardArrowDown />
                  </span>
                </p>
              </div>

              <hr />

              <div className="sidebar-actions">
                <button className="btn sign-in">Sign Up</button>
                <button className="btn cart">Sign In</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="sub-header">
        <div className="sub-header-container">
          <div className="sub-header-left">
            <a href="#">Halal Meats</a>
            <a href="#">Hot Plates & Sandwiches</a>
            <a href="#">Back to Delco Farmers Market</a>
          </div>

          <div className="sub-header-right">
            <div className="sub-header-right-buttons">
              <button
                className="active"
                // onClick={() => setShowDeliveryModal(true)}
              >
                <span>
                  <img src="/assets/Icons/truck.svg" alt="" />
                </span>{" "}
                Delivery
              </button>
              <button>
                <span>
                  <img src="/assets/Icons/pickup.svg" alt="" />
                </span>{" "}
                Pickup
              </button>
            </div>
            <div className="location">
              Delivery to:{" "}
              <span>
                Council Bluffs, United States{" "}
                <span className="down-icon">
                  <MdKeyboardArrowDown />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-header-mobile">
        <div className="sub-header-mobile-container">
          <div className="sub-header-mobile-right-buttons">
            <button className="active">Delivery</button>
            <button>Pickup</button>
          </div>
          <div className="mobile-location">
            Delivery to: <span>Council Bluffs, United States</span>
          </div>
          <div className="search-mobile-box">
            <span>
              <IoSearch />
            </span>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>
      {/* <DeliveryModal
        isOpen={showDeliveryModal}
        onClose={() => setShowDeliveryModal(false)}
      /> */}
    </>
  );
}
