import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Sidecart from '../cart/Sidecart.jsx';
import ButtonFunctions from '../buttonFunctions/ButtonFunctions.js';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [cartCountItems, setCartCountItems] = useState(0);

  console.log('cartCountItems', cartCountItems);

  const toggleSidecart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar
        countCartItems={cartCountItems}
        toggleSidecart={toggleSidecart}
        ButtonFunctions={ButtonFunctions}
        cartCount={cartCount}
      />
      <Sidecart isOpen={isOpen} toggleSidecart={toggleSidecart} />
    </>
  );
};

export default Main;
