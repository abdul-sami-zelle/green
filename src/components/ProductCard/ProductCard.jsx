"use client";
import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/addToCart";
import { useRouter } from "next/navigation";
import ProductDetailModal from "../ProductDetailModal/ProductDetailModal";
import { apiUrl } from "../../lib/api";
import "./style.css";

export default function ProductCard({
  product,
  allProducts = [],
  handleShowDetailModal,
  disableModal = false,
}) {
  const { addToCart } = useContext(CartContext);
  const router = useRouter();
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  const handleImageClick = (e) => {
    e.stopPropagation();

    if (disableModal) {
      router.push(`/product/${product.slug}`);
      return;
    }

    if (isMobile) {
      router.push(`/product/${product.slug}`);
    } else {
      if (handleShowDetailModal) {
        handleShowDetailModal(product, allProducts);
      } else {
        setShowDetailModal(true);
      }
    }
  };

  const handleNameClick = (e) => {
    e.stopPropagation();
    router.push(`/product/${product.slug}`);
  };

  useEffect(() => {
    if (showDetailModal) {
      const filtered = allProducts
        .filter((itm) => itm._id !== product._id)
        .slice(0, 4);

      setFilteredProducts(filtered);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showDetailModal, allProducts, product._id]);

  return (
    <>
      <div className="product-card-container">
        <div className="product-card">
          <img
            src={`${apiUrl}${product?.image}`}
            alt={product.title}
            onClick={handleImageClick}
          />

          <div className="product-info">
            {!product.hidePrice && (
              <p className="price">
                {product.currency}
                {product.price.toFixed(2)}
                {product.mode === "weight" && (
                  <span className="lb">
                    / {product.volume}
                    {product.volumeUnits}
                  </span>
                )}
              </p>
            )}
            <h4 className="name" onClick={handleNameClick}>
              {product.title}
            </h4>
            {/* <p className="weight">
              {product.volume} {product.volumeUnits}
            </p> */}

            <button
              className="add-to-cart"
              disabled={!product.is_instock}
              onClick={(e) => {
                e.stopPropagation();
                if (product.is_instock) {
                  addToCart(product);
                }
              }}
            >
              {product.is_instock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>

      {!disableModal && showDetailModal && (
        <ProductDetailModal
          showModal={showDetailModal}
          setShowModal={setShowDetailModal}
          productData={product}
          otherProducts={filteredProducts}
        />
      )}
    </>
  );
}
