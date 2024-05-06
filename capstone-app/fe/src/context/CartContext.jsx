import React, { createContext, useContext, useEffect, useState } from 'react';
import '../components/cart/Sidecart.css';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem('cartItems')) || []
  );

  // Open e Close Sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidecart = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    // setIsOpen(!isOpen);
  };

  // Add item to cart
  const addToCart = productId => {
    console.log('addToCart: product =', productId);
    console.log('cartItems =', cartItems);
    const existingItemIndex = cartItems.findIndex(
      item => item.id === productId
    );
    // const newProduct = { ...product, qty: product.qty || 1 };
    // product.qty = product.qty || 1;
    console.log('qty', productId.qty);

    if (existingItemIndex !== -1) {
      const updatedItems = [...cartItems];
      updatedItems[existingItemIndex].qty += 1;
      setCartItems(updatedItems);
    } else {
      // setCartItems([...cartItems, newProduct]);
      setCartItems([...cartItems, productId]);
    }
  };

  // Remove item from cart
  const removeFromCart = productId => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isOpen, toggleSidecart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
