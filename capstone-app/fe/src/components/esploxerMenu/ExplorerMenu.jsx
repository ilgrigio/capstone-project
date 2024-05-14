import React from 'react';
import './ExplorerMenu.css';
import { menuList } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ExplorerMenu = ({ category, setCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleLinkClick = () => {
    setTimeout(() => {
      // Effettua la navigazione qui
    }, 3000); // Imposta il timeout a 3 secondi (3000 millisecondi)
  };

  return (
    <div className="container--explorer bg-danger rounded-3">
      <div className="row pt-3">
        <h1 className="text-light">Guarda il nostro Menu</h1>
        <p className="explore__menu__text">Scegli cosa ti piace!</p>
        {menuList.map((item, idx) => {
          return (
            <div
              onClick={() => {
                setSelectedCategory(item.name);
                setCategory(prev => (prev === item.name ? 'All' : item.name));
              }}
              key={idx}
              className="category col m-3"
            >
              <Link to={`/${item.name}`} onClick={handleLinkClick}>
                <img
                  className={selectedCategory === item.name ? 'active' : ''}
                  src={item.photo}
                  alt={item.name}
                />
              </Link>
              <p className="item__name small">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorerMenu;
