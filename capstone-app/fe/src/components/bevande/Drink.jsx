import React from 'react';
import SushiProducts from '../singleDish/SingleDish';
import Main from '../main/Main';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

const Drink = () => {
  const [drink, setDrink] = useState([]);
  const { cart } = useCart();

  const fetchDishes = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/dishes/drink`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dishes = await response.json();
      setDrink(dishes.category);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <>
      <Main countCart={cart.length} />
      <div className="container-fluid">
        <div className="row g-3">
          <h1>Guarda il nostro Menu</h1>
          {drink.map((item, idx) => {
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
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Drink;
