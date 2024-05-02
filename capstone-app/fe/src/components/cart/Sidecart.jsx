import { useState } from 'react';
import React from 'react';
import './Sidecart.css';

const Sidecart = ({ handleToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidecart = () => {
    setIsOpen(!isOpen);
    handleToggle();
  };

  return (
    <div
      className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}
      onClick={toggleSidecart}
    >
      {isOpen ? 'Sidecart' : 'Close sidecart'}
    </div>
  );
};

export default Sidecart;
