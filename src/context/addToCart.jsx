"use client";

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showSideCart, setShowSideCart] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const qty = Number(quantity) || product.quantityInitial || 1;

    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item._id.$oid === product._id.$oid
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += qty;

        if (updatedCart[existingProductIndex].quantity > product.quantityMax) {
          updatedCart[existingProductIndex].quantity = product.quantityMax;
        }
        return updatedCart;
      }

      return [...prevCart, { ...product, quantity: qty }];
    });
    setShowSideCart(true);
  };

  const increaseQuantity = (oid) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id.$oid === oid
          ? {
              ...item,
              quantity:
                item.quantity + item.quantityStep > item.quantityMax
                  ? item.quantityMax
                  : item.quantity + item.quantityStep,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (oid) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id.$oid === oid
          ? {
              ...item,
              quantity:
                item.quantity - item.quantityStep < item.quantityMin
                  ? item.quantityMin
                  : item.quantity - item.quantityStep,
            }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id.$oid !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        showSideCart,
        setShowSideCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
