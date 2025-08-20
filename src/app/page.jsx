"use client";

import { useContext, useState } from "react";
import CenterBanner from "../components/CenterBanner/CenterBanner";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import Products from "../components/Products/Products";
import SideCart from "../components/SideCart/SideCart";
import BottomBar from "../components/BottomBar/BottomBar";
import { CartContext } from "../context/addToCart";

export default function Home() {
  const { showSideCart, setShowSideCart } = useContext(CartContext);
  const handleShowSideCart = () => {
    setShowSideCart(true);
  };

  return (
    <>
      <Header handleShowSideCart={handleShowSideCart} />
      <div className="main-homepage">
        <Products />
      </div>
      <div className="mobile-product-categories">
        <ProductCategories />
      </div>
      <Footer />
      <div className="mobile-bottom-bar">
        <BottomBar />
      </div>
      <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
    </>
  );
}
