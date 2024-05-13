import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const { cart, toggleSidecart } = useCart();
  const handleCartClick = () => {
    toggleSidecart();
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            <img src={logo} alt="" className="sushi--logo" />
            Sushi Restaurant
          </span>
          <div className="d-flex gap-3">
            <Link to={'/'} className="text-light fw-bolder underline">
              Home
            </Link>
            <Link
              to={'#'}
              onClick={handleCartClick}
              className="text-light underline"
            >
              <FaCartShopping size={25} color="inherit" />

              {/* {cartItems.length > 0 && ( */}
              <button className="badge">{cart?.length}</button>
              {/* )} */}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
