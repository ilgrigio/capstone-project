import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Sidecart from '../cart/Sidecart.jsx';
import ButtonFunctions from '../buttonFunctions/ButtonFunctions.js';

const Main = ({ cartCountItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  console.log(cartCountItems);
  // const updateCartCount = newCount => {
  //   setCartCount(newCount);
  // };

  const toggleSidecart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar
        countCartItems={cartCountItems}
        toggleSidecart={toggleSidecart}
        cartCount={cartCount}
      />
      <Sidecart isOpen={isOpen} toggleSidecart={toggleSidecart} />
      {/* <ButtonFunctions
        cart={cart}
        updateCartCount={updateCartCount}
        countCartItems={cartCountItems}
      /> */}
    </>
  );
};

export default Main;
