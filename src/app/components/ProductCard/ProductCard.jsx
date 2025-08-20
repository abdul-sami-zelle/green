"use client";
import React, { useContext } from "react";
import { CartContext } from "../../../context/addToCart";
import { useRouter } from "next/navigation";
import "./style.css";

export default function ProductCard({ product, onClick, setShowSideCart }) {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const handleNameClick = (e) => {
    e.stopPropagation();
    router.push(`/product`);
  };

  return (
    <div className="product-card-container">
      <div className="product-card">
        <img
          src={product.image}
          alt={product.name}
          onClick={() => onClick(product)}
        />
        <div className="product-info">
          <p className="price">
            {product.price} <span className="lb">{product.lb}</span>
          </p>
          <h4 className="name" onClick={handleNameClick}>
            {product.name}
          </h4>
          <p className="weight">{product.weight}</p>
          <div className="add-to-cart-container"></div>
          <button
            className="add-to-cart"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product, 1);
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
