'use client'

import { useContext, useState } from "react";
import CenterBanner from "./components/CenterBanner/CenterBanner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import Products from "./components/Products/Products";
import SideCart from "./components/SideCart/SideCart";
import { CartContext } from "@/context/addToCart";

export default function Home() {

  // const [showSideCart, setShowSideCart] = useState(false);
  const {showSideCart, setShowSideCart} = useContext(CartContext)
  const handleShowSideCart = () => {
    setShowSideCart(true)
  }
  
  return (
    <>
      <Header handleShowSideCart={handleShowSideCart} />
      <Products  />
      <CenterBanner />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <ProductCategories />
      <Footer/>

      <SideCart 
        showSideCart={showSideCart}
        setShowSideCart={setShowSideCart}
      />
    </>
  );
}
