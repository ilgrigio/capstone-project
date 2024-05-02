import React, { useState } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Sidecart from '../cart/Sidecart.jsx';

const Main = ({ countCartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidecart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar countCartItems={countCartItems} toggleSidecart={toggleSidecart} />
      <Sidecart isOpen={isOpen} toggleSidecart={toggleSidecart} />
    </>
  );
};

export default Main;
