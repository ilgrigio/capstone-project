import React from 'react';
import './ExplorerMenu.css';
import { menuList } from '../../assets/assets';

const ExplorerMenu = () => {
  return (
    // <div className="explore__menu" id="explore__menu">
    <div className="container-fluid">
      <div className="row">
        <h1>Guarda il nostro Menu</h1>
        <p className="explore__menu__text">Scegli cosa ti piace!</p>
        {/* <div className="explore__menu__list"> */}
        {menuList.map((item, idx) => {
          return (
            <div key={idx} className="category">
              <img src={item.photo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default ExplorerMenu;
