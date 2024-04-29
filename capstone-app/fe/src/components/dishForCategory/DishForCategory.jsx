import React, { useState, useEffect } from 'react';

const DishForCategory = ({ category }) => {
  const [dishes, setDishes] = useState([]);

  const fetchDishes = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/dishes`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDishes(data.dishes);
      console.log(dishes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const filteredDishes =
    category === 'all'
      ? dishes
      : dishes.filter((dish) => dish.category.includes(category));
  if (!Array.isArray(filteredDishes) || filteredDishes.length === 0) {
    return <div>Nessun Piatto trovato!</div>;
  }
  return (
    <>
      <div>
        {filteredDishes &&
          filteredDishes.map((filterDish) => (
            <div>
              <h1>{filterDish.name}</h1>
              <img src={filterDish.photo} alt="" />
            </div>
          ))}
      </div>
    </>
  );
};

export default DishForCategory;
