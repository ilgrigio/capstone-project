import { React, useState, useEffect } from 'react';
import image1 from '../../assets/hero/hero1.jpg';
import image2 from '../../assets/hero/hero2.jpg';
import image3 from '../../assets/hero/hero3.jpg';
import image4 from '../../assets/hero/hero4.jpg';
import image5 from '../../assets/hero/hero5.jpg';

import './Hero.css';

const Hero = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setCurrentImage(images[i]);
      i = (i + 1) % images.length;
    }, 9000);

    return () => clearInterval(timer); // Pulisce l'intervallo quando il componente si smonta
  }, []);

  return (
    <div className="container--hero">
      <img src={currentImage} className="hero" alt="hero" />
    </div>
  );
};

export default Hero;
