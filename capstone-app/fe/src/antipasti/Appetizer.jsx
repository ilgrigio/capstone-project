import React from 'react';
import './Appetizer.css';
import { antipastiDishes } from '../assets/assets';
import SushiProducts from '../components/singleDish/SingleDish';
import Navbar from '../components/navbar/Navbar';
import MainLayout from '../layouts/MainLayout';

const Appetizer = () => {
  const addToCart = (item) => {
    console.log(`${item.name} è stato aggiunto al carrello!`);
  };
  return (
    <MainLayout>
      <div className="container-fluid">
        <div className="row g-3">
          <h1>Guarda il nostro Menu</h1>
          {antipastiDishes.map((item, idx) => {
            return (
              <div key={idx} className="col col-md-3 col-sm-6">
                <SushiProducts
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  photo={item.photo}
                  onClick={() => addToCart(item)}
                />
                <button className="btn">Aggiungi al carrello</button>
              </div>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};

export default Appetizer;
