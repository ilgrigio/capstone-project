import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({ countCartItems, toggleSidecart }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Sushi Restaurant</span>
          <div className="d-flex gap-3">
            <Link to={'/home'} style={{ color: 'white' }}>
              Home
            </Link>
            <Link to={'#'} onClick={toggleSidecart} style={{ color: 'white' }}>
              <FaCartShopping size={25} color="#fff" />

              {countCartItems > 0 && (
                <button className="badge">{countCartItems}</button>

                // ) : (
                //   ''
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
