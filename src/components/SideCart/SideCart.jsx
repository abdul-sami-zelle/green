"use client";
import React, { useContext } from "react";
import "./SideCart.css";
import { IoIosClose, IoIosAdd } from "react-icons/io";
import { HiMinusSmall } from "react-icons/hi2";
import { TbTrash } from "react-icons/tb";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CartContext } from "../../context/addToCart";

const SideCart = ({ showSideCart, setShowSideCart }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const router = useRouter();

  const handleCloseSideCart = () => setShowSideCart(false);
  const handleCheckout = () => {
    setShowSideCart(false);
    router.push("/checkout");
  };

  const getNumericPrice = (price) =>
    parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;

  const total = cart.reduce(
    (acc, item) => acc + getNumericPrice(item.price) * item.quantity,
    0
  );

  return (
    <div
      className={`side-cart-contaner ${showSideCart ? "show-side-cart" : ""}`}
      onClick={handleCloseSideCart}
    >
      <div
        className={`side-cart-inner-container ${
          showSideCart ? "show-side-cart-inner" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="side-cart-head">
          <span>
            <div className="cart-image-wrapper">
              <img src="/assets/Icons/cart-icon.svg" alt="cart" />
              <span className="cart-count">{cart.length}</span>
            </div>
            Your Cart
          </span>
          <button onClick={handleCloseSideCart}>
            <IoIosClose size={35} color="#595959" />
          </button>
        </div>

        {/* Products */}
        <div className="side-cart-products-container">
          {cart.length === 0 ? (
            <div className="empty-cart-container">
              <Image
                src="/assets/Images/cart-empty.png"
                width={150}
                height={150}
                alt="Empty Cart"
              />
              <h3>No Product Found</h3>
              <p>Your Cart Is Empty!</p>
            </div>
          ) : (
            cart.map((item) => {
              const unitPrice = getNumericPrice(item.price);
              const totalItemPrice = (unitPrice * item.quantity).toFixed(2);

              return (
                <div className="side-cart-single-product" key={item._id.$oid}>
                  {/* Remove button */}
                  <button
                    className="side-cart-single-product-delete"
                    onClick={() => removeFromCart(item._id.$oid)}
                  >
                    <TbTrash size={20} color="#E54B4B" />
                  </button>

                  {/* Image */}
                  <div className="side-cart-image-container">
                    <Image
                      src={item.image}
                      width={150}
                      height={100}
                      alt={item.title}
                    />
                  </div>

                  {/* Details */}
                  <div className="side-cart-product-details">
                    <h3>{item.title}</h3>
                    <p className="unit-price">
                      {item.currency}
                      {unitPrice.toFixed(2)}
                    </p>

                    {/* Quantity & total */}
                    <div className="quantity-price-row">
                      <div className="select-product-quantity-add">
                        <button onClick={() => decreaseQuantity(item._id.$oid)}>
                          <HiMinusSmall size={20} color="#ECB264" />
                        </button>

                        {/* Center value is always quantityInitial/min */}
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                        />

                        <button onClick={() => increaseQuantity(item._id.$oid)}>
                          <IoIosAdd size={20} color="#ECB264" />
                        </button>
                      </div>
                      <p className="total-price">
                        {item.currency}
                        {totalItemPrice}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Checkout */}
        {cart.length > 0 && (
          <div className="side-cart-checkout-contianer">
            <div className="subtotal-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideCart;
