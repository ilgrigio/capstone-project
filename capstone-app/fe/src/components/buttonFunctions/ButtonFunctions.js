import { React, useState } from 'react';

const ButtonFunctions = () => {
  const [cart, setCart] = useState([]);

  const onAdd = (item, _id) => {
    console.log(`il piatto ${item.name} è stato aggiunto`, item._id);
    // Controlla se il piatto è già nel carrello
    const cartItem = cart.find((item) => item._id === _id);
    // !cartItem
    //   ? console.log('non trovato!')
    //   : console.log('il piatto', cartItem);
    if (cartItem) {
      const newCart = cart.map((item) => {
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
      setCart((prevCart) => {
        const updatedCart = [...prevCart, newItem];
        // setCart([...cart, newItem]);
        console.log('Numero piatti', updatedCart);
        return updatedCart;
      });
    }
  };

  const onRemove = (item, _id) => {};
};
export default ButtonFunctions;
