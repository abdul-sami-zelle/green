"use client";

import { useContext, useState } from "react";
import Footer from "../components/Footer/Footer";
import AlsoBought from "../components/AlsoBought/AlsoBought";
import SideCart from "../components/SideCart/SideCart";
import { CartContext } from "../../context/addToCart";
import CategoryTopbar from "../components/CategoryTopbar/CategoryTopbar";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import Image from "next/image";
import ProductCard from "../components/ProductCard/ProductCard";
import { FaChevronRight } from "react-icons/fa";

export default function ProductPage() {
  const { showSideCart, setShowSideCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const products = [
    {
      id: 1,
      name: "Halal Ground Beef 90/10",
      price: "$6.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef1.jpg",
      description:
        "Premium halal ground beef with 90% lean meat and 10% fat. Perfect for healthy meals, tacos, and stir-fry.",
    },
    {
      id: 2,
      name: "Halal Ground Beef 80/20",
      price: "$5.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef2.jpg",
      description:
        "Juicy and flavorful halal ground beef with 80% lean and 20% fat, ideal for burgers and meatballs.",
    },
    {
      id: 3,
      name: "Halal Black Angus Beef Patty 8oz",
      price: "$6.49",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef3.jpg",
      description:
        "Thick, juicy halal Black Angus patties (8oz each) for restaurant-style gourmet burgers at home.",
    },
    {
      id: 4,
      name: "Halal Ground Chili Meat",
      price: "$6.99",
      lb: "/ lb",
      weight: "1 lb",
      image: "/assets/Images/beef4.jpg",
      description:
        "Specially ground halal beef perfect for making chili, curries, and hearty stews.",
    },
  ];

  const mainProduct = products[0];

  return (
    <>
      <CategoryTopbar />
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          maxWidth: "80%",
          margin: "auto",
          marginTop: "170px",
          marginBottom: "30px",
        }}
      >

        <div className="product-detail-page-with-similar-product">
                    <div className="breadcrum-container">
          <span className="breadcrumb-home">Home</span>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-text">About</span>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-text">Services</span>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-text">Team</span>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-text">Projects</span>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-text">Blog</span>
          <FaChevronRight className="breadcrumb-icon" />
          <span className="breadcrumb-text">Contact</span>
        </div>
          <div className="product-box">
            <div className="product-box-image">
              <Image
                src={mainProduct.image}
                width={380}
                height={290}
                alt={mainProduct.name}
              />
            </div>

            <div className="product-box-info">
              <h3 className="product-box-title">{mainProduct.name}</h3>
              <p className="product-box-price">
                {mainProduct.price}
                {mainProduct.lb}
              </p>

              <h3 className="product-box-desc-heading">Description</h3>
              <p className="product-box-desc-text">{mainProduct.description}</p>

              <div className="product-box-list">
                <span>
                  <img src="/assets/Icons/list.svg" alt="list icon" />
                </span>
                Add To List
              </div>

              <div className="product-box-cart-actions">
                <div className="product-box-quantity">
                  <button onClick={decreaseQuantity}>
                    <FiMinus size={20} color="#ECB264" />
                  </button>
                  <input type="text" value={quantity} readOnly />
                  <button onClick={addQuantity}>
                    <IoIosAdd size={20} color="#ECB264" />
                  </button>
                </div>
                <div className="product-box-addcart">
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
          </div>

          <div className="similar-box">
            <h3>Similar Products</h3>
            <div className="similar-box-grid">
              {products.slice(0, 4).map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
        <AlsoBought />
      </div>
      <Footer />
      <SideCart showSideCart={showSideCart} setShowSideCart={setShowSideCart} />
    </>
  );
}
