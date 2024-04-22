import React from 'react';
import './ExplorerMenu.css';
import { menuList } from '../../assets/assets';

const ExplorerMenu = ({ category, setCategory }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Guarda il nostro Menu</h1>
        <p className="explore__menu__text">Scegli cosa ti piace!</p>
        {menuList.map((item, idx) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) => (prev === item.name ? 'All' : item.name))
              }
              key={idx}
              className="col m-3"
            >
              <img
                className={category === item.name ? 'active' : ''}
                src={item.photo}
                alt={item.name}
              />
              <p className="item__name">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExplorerMenu;

/* 

const MenuItem = ({ item, category, setCategory }) => {
  const handleClick = () => {
    setCategory((prev) => (prev === item.name ? 'All' : item.name));
  };

  return (
    <div onClick={handleClick} className="col m-3">
      <img
        className={category === item.name ? 'active' : ''}
        src={item.photo}
        alt={item.name}
      />
      <p className="item__name">{item.name}</p>
    </div>
  );
};

const ExplorerMenu = ({ category, setCategory }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Guarda il nostro Menu</h1>
        <p className="explore__menu__text">Scegli cosa ti piace!</p>
        {menuList.map((item, idx) => (
          <MenuItem key={idx} item={item} category={category} setCategory={setCategory} />
        ))}
      </div>
    </div>
  );
};

*/
