import React from 'react';
import SushiProducts from '../singleDish/SingleDish';
import Navbar from '../navbar/Navbar';
import { useState, useEffect } from 'react';

const SecondDishes = () => {
  const [secondDishes, setSecondDishes] = useState([]);
  const [cart, setCart] = useState([]);

  const onAdd = () => {};
  const onRemove = () => {};

  const fetchDishes = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/dishes/secondi`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dishes = await response.json();
      setSecondDishes(dishes.category);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <>
      <Navbar countCartItems={cart.length} />
      <div className="container-fluid">
        <div className="row gy-4">
          {secondDishes.map((item, idx) => {
            return (
              <div key={idx} className="col col-md-3 col-sm-6">
                <SushiProducts
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price.$numberDecimal}
                  photo={item.photo}
                  qty={item.qty}
                  // countCartItems={item.amount}
                />
                <div className="quantity-controls">
                  <button onClick={() => onRemove(item)} className="btn">
                    -
                  </button>
                  <button onClick={() => onAdd(item)} className="btn">
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SecondDishes;
