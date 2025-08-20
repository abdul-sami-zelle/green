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
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }

      return [...prevCart, { ...product, quantity }];
    });
    setShowSideCart(true);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, showSideCart, setShowSideCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
