import React, { useContext, useState } from "react";
import "./ProductDetailModal.css";
import { IoIosClose, IoIosAdd } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartContext } from "../../context/addToCart";
import ProductCard from "../ProductCard/ProductCard";
import { HiMinusSmall } from "react-icons/hi2";

const ProductDetailModal = ({
  showModal,
  setShowModal,
  productData,
  otherProducts,
}) => {
  const handleCloseDetailModal = () => {
    setShowModal(false);
  };

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const router = useRouter();

  const addQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    addToCart(productData, quantity);
    setQuantity(1);
    setShowModal(false);
  };

  const numericPrice = parseFloat(
    String(productData.price).replace(/[^0-9.]/g, "")
  );

  const handleSimilarProductClick = (item) => {
    setShowModal(false);
    router.push({
      pathname: "/product",
      query: { id: item.id },
    });
  };

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
              src={productData?.image || "/assets/Images/placeholder.png"}
              width={330}
              height={240}
              alt={productData?.name || "Product image"}
            />
          </div>
          <div className="product-detail-selected-product-detail-container">
            <h3 className="selected-product-name">{productData.title}</h3>
            <p className="selected-product-price">
             {productData.currency}{productData.price}<span>/ {productData.volume} {productData.volumeUnits}</span>
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
                  <HiMinusSmall size={20} color="#ECB264" />
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
                  Add to Cart (${(numericPrice * quantity).toFixed(2)})
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="selected-product-similler-main-container">
          <h3>Similar Products</h3>
          <div className="selected-product-simmer-products">
            {otherProducts?.slice(0, 4).map((item) => (
              <div key={item._id.$oid} className="similar-products-alignment">
                <ProductCard product={item} disableModal={true} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
