import React from 'react';
import Itemcard from '../singleDish/SingleDish';
import Main from '../main/Main';
import { useState, useEffect } from 'react';

const Dolci = () => {
  const [dessert, setDessert] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/dishes/dessert`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dishes = await response.json();
      setDessert(dishes.category);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <>
      <Main />
      <div className="container-fluid">
        <div className="row gy-4">
          {dessert.map((item, idx) => {
            return (
              <div key={idx} className="col col-md-3 col-sm-6">
                <Itemcard
                  item={item}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price.$numberDecimal}
                  photo={item.photo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dolci;
