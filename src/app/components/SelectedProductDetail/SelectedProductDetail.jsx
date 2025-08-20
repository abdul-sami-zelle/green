import React, { useContext, useState } from "react";
import "./style.css";
import { IoIosClose, IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import Image from "next/image";
import { CartContext } from "../../../context/addToCart";
import ProductCard from "../ProductCard/ProductCard";

const SelectedProductDetail = ({
  showModal,
  setShowModal,
  productData,
  otherProducts,
}) => {
  const handleCloseDetailModal = () => {
    setShowModal(false);
  };

  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(productData, quantity);
    setQuantity(1);
    setShowModal(false);
  };

  const handleSimillerProductAddToCart = (item) => {
    addToCart(item, 1);
  };
  const numericPrice = parseFloat(
    String(productData.price).replace(/[^0-9.]/g, "")
  );

  return (
    <div
      className={`product-detail-modal-main-container ${
        showModal ? "show-product-details" : ""
      }`}
      onClick={handleCloseDetailModal}
    >
      <div
        className={`product-detail-modal-inner-container ${
          showModal ? "show-product-details-inner-modal" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="product-detail-modal-close-btn"
          onClick={handleCloseDetailModal}
        >
          <IoIosClose size={30} color="#1D1B20" />
        </button>

        <div className="product-detail-selected-product-details-container">
          <div className="product-detail-selected-product-image-container">
            <Image
              src={productData?.image || "/assets/placeholder.png"}
              width={330}
              height={240}
              alt={productData?.name || "Product image"}
            />
          </div>
          <div className="product-detail-selected-product-detail-container">
            <h3 className="selected-product-name">{productData.name}</h3>
            <p className="selected-product-price">
              {productData.price}/<span>lb</span>
            </p>
            <h3 className="description">Description</h3>
            <p className="selected-product-descripton">
              {productData.description}
            </p>

            <div className="list-items">
              <span>
                <img src="/assets/Icons/list.svg" alt="" />
              </span>{" "}
              Add To List
            </div>

            <div className="selected-product-add-to-cart-container">
              <div className="selected-product-quantity-add">
                <button onClick={decreaseQuantity}>
                  <FiMinus size={20} color="#ECB264" />
                </button>
                <input type="text" value={quantity} readOnly />
                <button onClick={addQuantity}>
                  <IoIosAdd size={20} color="#ECB264" />
                </button>
              </div>
              <div
                className="selected-product-add-to-cart-btn-container"
                onClick={handleAddToCart}
              >
                <button>
                  Add to cart ({(numericPrice * quantity).toFixed(2)})
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="selected-product-similler-main-container">
          <h3>Similar Products</h3>
          <div className="selected-product-simmer-products">
            {otherProducts.slice(0, 3).map((item, index) => (
              <ProductCard
                key={index}
                product={item}
                onAddToCart={() => handleSimillerProductAddToCart(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProductDetail;
