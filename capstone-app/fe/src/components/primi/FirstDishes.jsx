import React from 'react';
import SushiProducts from '../singleDish/SingleDish';
import Main from '../main/Main';
import { useState, useEffect } from 'react';

const FirstDishes = () => {
  const [firstDishes, setFirstDishes] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/dishes/primi`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dishes = await response.json();
      setFirstDishes(dishes.category);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <>
      <Main countCartItems={cart.length} />
      <div className="container-fluid">
        <div className="row gy-4">
          {firstDishes.map((item, idx) => {
            return (
              <div key={idx} className="col col-md-3 col-sm-6">
                <SushiProducts
                  data={item}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price.$numberDecimal}
                  photo={item.photo}
                  qty={item.qty}
                  // countCartItems={item.amount}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FirstDishes;
