import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Sidecart from '../cart/Sidecart.jsx';
import { CartProvider } from '../../context/CartContext.jsx';

const Main = () => {
  return (
    <CartProvider>
      <Navbar />
      <Sidecart />
    </CartProvider>
  );
};

export default Main;
