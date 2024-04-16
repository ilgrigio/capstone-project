import React from 'react';
import koyahero from '../../assets/hero/koya-hero.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <>
      <div className="">
        <img src={koyahero} className="hero" alt="hero image" />
        <div className="card-img-overlay card-text-center">
          <button className="button btn btn-primary">Login</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
