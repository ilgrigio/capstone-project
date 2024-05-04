import React from 'react';
import './Sidecart.css';

const Sidecart = ({ isOpen, toggleSidecart }) => {
  return (
    <div
      className={`sidebar ${isOpen ? 'sidebar--open' : 'hide'}`}
      onClick={toggleSidecart}
    >
      <h2>Il tuo Carrello</h2>
      {isOpen ? 'Sidecart' : 'Close'}
    </div>
  );
};

export default Sidecart;
