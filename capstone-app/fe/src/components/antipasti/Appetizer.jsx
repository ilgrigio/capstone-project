import React, { useEffect, useState } from 'react';
import './Appetizer.css';
import SushiProducts from '../singleDish/SingleDish';
import Navbar from '../navbar/Navbar';

const Appetizer = () => {
  const [antipastiDishes, setAntipastiDishes] = useState([]);
  // const [dishError, setDishError] = useState(null);

  const [cart, setCart] = useState([]);

  const onAdd = (item, _id) => {
    console.log(`il piatto ${item.name} è stato aggiunto`, item._id);
    const newItem = { ...item, qty: 1 };
    console.log('new item', newItem);
    // Controlla se il piatto è già nel carrello
    const cartItem = cart.find(item => item._id === _id);
    !cartItem
      ? console.log('non trovato!')
      : console.log('il piatto', cartItem);
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item._id === _id) {
          return { ...item, qty: cartItem.qty + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  console.log('dish', cart);

  const onRemove = (item, _id) => {
    const newItem = { ...item, qty: 1 };
    const cartItem = cart.find(item => {
      return item._id === _id;
    });
    if (newItem) {
      const newCart = cart.map(item => {
        if (item._id === _id) {
          return { ...item, qty: cartItem.qty - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      if (cartItem < 2) {
        setCart([]);
      }
    }
    // const exist = cartItems.find(x => x._id === item._id);
    // if (exist.qty === 1) {
    //   const newCartItems = cartItems.filter(x => x._id !== item._id);
    //   setCartItems(newCartItems);
    // } else {
    //   const newCartItems = cartItems.map(x =>
    //     x._id === item._id ? { ...exist, qty: exist.qty - 1 } : x
    //   );
    //   setCartItems(newCartItems);
    // }
  };

  // console.log('Errore', dishError);
  const fetchDishes = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_BASE_URL}/dishes/antipasti`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dishes = await response.json();
      setAntipastiDishes(dishes.category);
    } catch (error) {
      console.error(error.message);
      // setDishError(error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <>
      <Navbar countCartItems={cart.length} />
      <div className="container-fluid">
        <div className="row gy-3">
          {antipastiDishes.map((item, idx) => {
            return (
              <div key={idx} className="col col-md-3 col-sm-6 sushi-card">
                <SushiProducts
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price.$numberDecimal}
                  photo={item.photo}
                  qty={item.qty}
                  // countCartItems={item.amount}
                />
                <div className="quantity-controls py-1">
                  <button onClick={() => onRemove(item._id)} className="btn">
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
  {
    /* <button onClick={() => onAdd(item)} className="btn">
                  Aggiungi al carrello
                </button>
              </div>
            );
          })}
        </div>
      </div> */
  }
  //     </>
  //   );
};

export default Appetizer;
