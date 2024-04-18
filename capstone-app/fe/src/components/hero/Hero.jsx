import React from 'react';
import koyahero from '../../assets/hero/koya-hero.jpg';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <div className="">
        <img src={koyahero} className="hero" alt="hero" />
        <div className="card-img-overlay card-text-center">
          <Link to="/login">
            <button type="button" className="button btn btn-primary">
              Click to order
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
