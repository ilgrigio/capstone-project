import React, { createContext, useContext, useEffect, useState } from 'react';
import '../components/cart/Sidecart.css';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );

  // Open e Close Sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidecart = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    // setIsOpen(!isOpen);
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, isOpen, toggleSidecart }}>
      {children}
    </CartContext.Provider>
  );
};
