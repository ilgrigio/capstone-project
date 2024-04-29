import React from 'react';
import './Navbar.css';

const Navbar = ({ countCartItems }) => {
  // console.log('count', countCartItems);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Sushi Restaurant</span>
          <a href="#/cart" style={{ color: 'white' }}>
            Cart
            {countCartItems ? (
              <button className="badge">{countCartItems}</button>
            ) : (
              ''
            )}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
