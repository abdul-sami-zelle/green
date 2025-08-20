"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { LiaTruckMovingSolid } from "react-icons/lia";
import "./style.css";

import SideCart from "../SideCart/SideCart";

export default function CategoryTopbar() {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showSideCart, setShowSideCart] = useState(false);

  const goHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="topbar-container">
        <div className="topbar-second">
          <div className="topbar-second-left">
            <div className="hamburger-logo-searchbar">
              <div className="hamburger-btn-second">
                <button
                  className="hamburger"
                  onClick={() => setShowSidebar(true)}
                >
                  <HiMenuAlt1 />
                </button>
              </div>

              <div
                className="logo-small"
                onClick={goHome}
                style={{ cursor: "pointer" }}
              >
                <img src="/assets/Images/logo.png" alt="Logo" />
              </div>

              <div className="search-box-second-category">
                <span>
                  <IoSearch />
                </span>
                <input type="text" placeholder="Search product" />
              </div>
            </div>
            <div className="topbar-right">
              <button
                className="btn sign-in"
                onClick={() => setShowSidebar(true)}
              >
                Sign In
              </button>

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
        </div>

        <div className="sub-header">
          <div className="sub-header-container">
            <div className="sub-header-left">
              <a href="#">Halal Meats</a>
              <a href="#">Hot Plates & Sandwiches</a>
              <a href="#"  onClick={goHome}>Back to Delco Farmers Market</a>
            </div>

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
                  <span className="down-icon">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Sidebar Overlay (like Header) === */}
      {showSidebar && (
        <div className="sidebar-overlay" onClick={() => setShowSidebar(false)}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <div className="sidebar-header">
              <img src="/assets/Images/logo.png" alt="logo" />
              <h2>Delco Farmers Market</h2>
            </div>

            <div className="sidebar-links">
              <p>Store Info</p>
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

      <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
    </>
  );
}
