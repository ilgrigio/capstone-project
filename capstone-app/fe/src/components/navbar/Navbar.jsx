import { React } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import sushilogo from '../../assets/hero/sushi-logo.png';
import { useCartContext } from '../../context/CartContext';
import { useCart } from 'react-use-cart';

const Navbar = () => {
  // Open e Close Sidebar
  const { isOpen, toggleSidecart } = useCartContext();
  const { items } = useCart();
  return (
    <nav className="navbar navbar-dark bg-dark">
      {/* <div className="navbar--items"> */}
      <span className="navbar-brand mb-0 h1">
        <img src={sushilogo} alt="logo" className="sushi--logo" />
        {''}
        Sushi Restaurant
      </span>
      <div className="d-flex gap-3">
        <Link to={'/'} className="text-light fw-bolder underline">
          Home
        </Link>
        <Link
          to={'#'}
          onClick={toggleSidecart}
          className="text-light underline"
        >
          <FaCartShopping size={25} color="inherit" />

          {items.length > 0 && (
            <button className="badge">{items.length}</button>
          )}
        </Link>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
