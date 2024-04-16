import React from 'react';
import './Footer.css';
// import logo from '../../assets/koya-logo.png';

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <h2>Koya sushi asian restaurant</h2>
      {/* <img src={logo} className="logo" /> */}
      <span>Per prenotazioni chiamare il numero: +39 011 19 23 44 25</span>
    </div>
  );
};

export default Footer;
