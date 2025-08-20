'use client'

import React, { createContext   , useState, useEffect } from "react";

// Create context
export const CartContext = createContext();



// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showSideCart, setShowSideCart] = useState(false);

  // Load cart from localStorage on first render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to cart function
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        // If product already exists, update quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += quantity;
        return updatedCart;
      }

      // If new product, add it
      return [...prevCart, { ...product, quantity }];
    });
    setShowSideCart(true)
  };

  // Remove from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, showSideCart, setShowSideCart }}>
      {children}
    </CartContext.Provider>
  );
};
