"use client";

import React from "react";
import { PiShoppingCartSimple } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import "./style.css";

const MobileSubHeader = ({
  title = "Departments",
  showSearch = true,
  showCart = true,
  showBack = true,
  onBack,
  onCartClick,
  searchPlaceholder = "Search",
  onSearch,
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) onBack();
    else router.back();
  };

  const handleSearch = (e) => {
    if (onSearch) onSearch(e.target.value);
  };

  return (
    <div className="mobile-sub-screens-header">
      <div className="mobile-sub-screen-cart-button">
        <span>
          {showBack && (
            <FaArrowLeft
              color="#64717E"
              size={16}
              style={{ cursor: "pointer" }}
              onClick={handleBack}
            />
          )}
        </span>

        <span className="departments">{title}</span>

        <span>
          {showCart && (
            <button
              className="mobile-sub-screen-btn mobile-sub-screen-cart"
              onClick={onCartClick}
            >
              <span>
                <PiShoppingCartSimple />
              </span>
              Cart
            </button>
          )}
        </span>
      </div>

      {showSearch && (
        <div className="search-sub-screen-mobile-box">
          <span>
            <IoSearch />
          </span>
          <input
            type="text"
            placeholder={searchPlaceholder}
            onChange={handleSearch}
          />
        </div>
      )}
    </div>
  );
};

export default MobileSubHeader;
