import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Sidecart from '../cart/Sidecart';

const Navbar = ({ countCartItems, handleToggle }) => {
  // console.log('count', countCartItems);
  return (
    <>
      <Sidecart />
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Sushi Restaurant</span>
          <div className="d-flex gap-3">
            <Link to={'/home'} style={{ color: 'white' }}>
              Home
            </Link>
            <Link to={'#'} onClick={handleToggle} style={{ color: 'white' }}>
              Cart
              {countCartItems ? (
                <button className="badge">{countCartItems}</button>
              ) : (
                ''
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
