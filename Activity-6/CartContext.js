
import React, { createContext, useState } from 'react';

// Create global context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    setIsUpdating(true);

    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setTimeout(() => {
      setIsUpdating(false);
    }, 1000);
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // Calculate total quantity
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalItems,
        isUpdating,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
