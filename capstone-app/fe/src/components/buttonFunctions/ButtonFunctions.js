import { useState } from 'react';
import SushiProducts from '../singleDish/SingleDish';

const ButtonFunctions = () => {
  const [cart, setCart] = useState([]);
  const { id, name, description, price, photo } = SushiProducts;

  const onAdd = (item, _id) => {
    console.log(`il piatto ${name} è stato aggiunto`, item._id);
    // Controlla se il piatto è già nel carrello
    const cartItem = cart.find(item => item._id === _id);

    if (cartItem) {
      const newCart = cart.map(item => {
        if (item._id === _id) {
          const updateItem = { ...item, qty: cartItem.qty + 1 };
          console.log('cart qty', updateItem.qty);
          return updateItem;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, qty: 1 };
      setCart(prevCart => {
        const updatedCart = [...prevCart, newItem];
        // setCart([...cart, newItem]);
        console.log('Numero piatti', updatedCart.length);
        return updatedCart;
      });
    }
  };

  const onRemove = (item, _id) => {
    console.log(`il piatto ${name} è stato rimosso`, item._id);
    const cartItem = cart.find(item => item._id === _id);

    if (cartItem && cartItem.qty > 1) {
      const newCart = cart.map(item => {
        if (item._id === _id) {
          const updateItem = { ...item, qty: cartItem.qty - 1 };
          return updateItem;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else if (cartItem && cartItem.qty === 1) {
      const newCart = cart.filter(item => item._id !== _id);
      setCart(newCart);
    }
  };

  return { onAdd, onRemove };
};
export default ButtonFunctions;
