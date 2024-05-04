import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Sidecart from '../cart/Sidecart.jsx';

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCountItems, setCartCountItems] = useState(0);

  const toggleSidecart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar countCartItems={cartCountItems} toggleSidecart={toggleSidecart} />
      <Sidecart isOpen={isOpen} toggleSidecart={toggleSidecart} />
    </>
  );
};

export default Main;
