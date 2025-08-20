"use client";
import React, { useContext } from "react";
import "./SideCart.css";
import { IoIosClose } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import { CartContext } from "../../context/addToCart";
import Image from "next/image";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbTrash } from "react-icons/tb";
import { useRouter } from "next/navigation";

const SideCart = ({ showSideCart, setShowSideCart }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const router = useRouter();

  const handleCloseSideCart = () => {
    setShowSideCart(false);
  };

  const getNumericPrice = (price) =>
    parseFloat(String(price).replace(/[^0-9.]/g, "")) || 0;

  const handleDeliveryInfo = () => {
    setShowSideCart(false);
    router.push("/deliveryInfo");
  };

  const total = cart.reduce((acc, item) => {
    const price = getNumericPrice(item.price);
    return acc + price * item.quantity;
  }, 0);

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
              const price = getNumericPrice(item.price);
              const totalItem = (price * item.quantity).toFixed(2);

              return (
                <div className="side-cart-single-product" key={item.id}>
                  <button
                    className="side-cart-single-product-delete"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <TbTrash size={20} color="#E54B4B" />
                  </button>

                  <div className="side-cart-image-container">
                    <Image
                      src={item.image}
                      width={150}
                      height={100}
                      alt="img"
                    />
                  </div>

                  <div className="side-cart-product-details">
                    <h3>{item.name}</h3>
                    <p className="unit-price">${price.toFixed(2)}</p>
                    <div className="quantity-price-row">
                      <div className="select-product-quantity-add">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          <FiMinus size={20} color="#ECB264" />
                        </button>
                        <input type="text" value={item.quantity} readOnly />
                        <button onClick={() => increaseQuantity(item.id)}>
                          <IoIosAdd size={20} color="#ECB264" />
                        </button>
                      </div>
                      <p className="total-price">${totalItem}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {cart.length > 0 && (
          <div className="side-cart-checkout-contianer">
            <div className="subtotal-row">
              <span>Subtotal:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button onClick={handleDeliveryInfo}>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideCart;
