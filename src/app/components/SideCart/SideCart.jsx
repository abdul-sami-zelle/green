"use client";
import React, { useState, useContext } from "react";
import "./SideCart.css";
import { IoIosClose } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { CartContext } from "../../../context/addToCart";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";

const SideCart = ({ showSideCart, setShowSideCart }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  const router = useRouter();

  const handleCloseSideCart = () => {
    setShowSideCart(false);
  };
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const getNumericPrice = (price) =>
    parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;

  const handleCheckout = () => {
    setShowSideCart(false);
    router.push("/Checkout");
  };

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
        <div className="side-cart-head">
          <span>
            <HiOutlineShoppingBag size={40} color="#595959" />
            Your Cart
          </span>
          <button onClick={handleCloseSideCart}>
            <IoIosClose size={35} color="#595959" />
          </button>
        </div>

        <div className="side-cart-products-container">
          {cart.map((item) => {
            const price = getNumericPrice(item.price);
            const total = (price * item.quantity).toFixed(2);

            return (
              <div className="side-cart-single-product" key={item.id}>
                <button
                  className="side-cart-single-product-delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  <TbTrash size={20} color="#E54B4B" />
                </button>

                <div className="side-cart-image-container">
                  <Image src={item.image} width={150} height={100} alt="img" />
                </div>

                <div className="side-cart-product-details">
                  <h3>{item.name}</h3>
                  <p className="unit-price">${price.toFixed(2)}</p>

                  <div className="quantity-price-row">
                    <div className="select-product-quantity-add">
                      <button onClick={decreaseQuantity}>
                        <FiMinus size={20} color="#ECB264" />
                      </button>
                      <input type="text" value={quantity} readOnly />
                      <button onClick={addQuantity}>
                        <IoIosAdd size={20} color="#ECB264" />
                      </button>
                    </div>
                    <p className="total-price">${total}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="side-cart-checkout-contianer">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
