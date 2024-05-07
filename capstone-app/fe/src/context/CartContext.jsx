import React, { createContext, useContext, useEffect, useState } from 'react';
import '../components/cart/Sidecart.css';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  // const [cartItems, setCartItems] = useState(
  //   JSON.parse(localStorage.getItem('cartItems')) || []
  // );

  // Open e Close Sidebar
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidecart = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    // setIsOpen(!isOpen);
  };

  // // Add item to cart
  // const addToCart = product => {
  //   console.log('addToCart: product =', product);
  //   console.log('cartItems =', cartItems);
  //   const existingItemIndex = cartItems.findIndex(
  //     item => item.id === product.id
  //   );
  //   // const newProduct = { ...product, qty: product.qty || 1 };
  //   product.qty = product.qty || 1;

  //   if (existingItemIndex !== -1) {
  //     const updatedItems = [...cartItems];
  //     updatedItems[existingItemIndex].qty += 1;
  //     setCartItems(updatedItems);
  //   } else {
  //     // setCartItems([...cartItems, newProduct]);
  //     console.log('nuovo prodotto:', product);
  //     setCartItems([...cartItems, [product.qty, product.id]]);
  //   }
  // };

  // // Remove item from cart
  // const removeFromCart = product => {
  //   console.log('cartItem', cartItems);
  //   console.log('hai rimosso', product);
  //   setCartItems(cartItems.filter(item => item.id !== product.id));
  // };
  // // RemoveQty
  // const removeQty = product => {
  //   const existingItemIndex = cartItems.findIndex(
  //     item => item.id === product.id
  //   );
  //   if (existingItemIndex !== -1) {
  //     const updatedItems = [...cartItems];
  //     updatedItems[existingItemIndex].qty -= 1;
  //     if (updatedItems[existingItemIndex].qty === 0) {
  //       removeFromCart(updatedItems[existingItemIndex]); // removeFromCart(product);
  //     } else {
  //       setCartItems(updatedItems);
  //     }
  //   }
  // };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart, isOpen, toggleSidecart }}>
      {children}
    </CartContext.Provider>
  );
  // return (
  //   <CartContext.Provider
  //     value={{
  //       cartItems,
  //       setCartItems,
  //       addToCart,
  //       removeFromCart,
  //       isOpen,
  //       toggleSidecart,
  //       removeQty,
  //     }}
  //   >
  //     {children}
  //   </CartContext.Provider>
  // );
};

// export const useCart = () => useContext(CartContext);
