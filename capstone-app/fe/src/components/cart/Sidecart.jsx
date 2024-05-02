import { useState } from 'react';
import React from 'react';
import './Sidecart.css';

const Sidecart = ({ isOpen, toggleSidecart }) => {
  return (
    <div
      className={`sidebar ${isOpen ? 'sidebar--open' : 'hide'}`}
      onClick={toggleSidecart}
    >
      {isOpen ? 'Sidecart' : 'Close'}
    </div>
  );
};

export default Sidecart;
