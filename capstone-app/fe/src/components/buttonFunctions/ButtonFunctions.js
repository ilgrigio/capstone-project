import { useState, useEffect } from 'react';

const ButtonFunctions = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log('Nuova lunghezza del carrello:', cart.length);
  }, [cart]);

  const onAdd = (item, _id) => {
    const { id, name } = item;

    console.log(`il piatto ${name} è stato aggiunto`, id);
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
      setCart([...cart, newItem]);
      //  setCart(prevCart => {
      //   const updatedCart = [...prevCart, newItem];
      //   console.log('Numero piatti', updatedCart.length);

      //   return updatedCart;
      // });
    }
    // console.log('Nuova lunghezza del carrello:', cart.length);
  };

  const onRemove = (item, _id) => {
    const { id, name } = item;

    console.log(`il piatto ${name} è stato rimosso`, id);
    const cartItem = cart.find(item => item._id === _id);

    if (cartItem && cartItem.qty > 1) {
      const newCart = cart.map(item => {
        if (item._id === _id) {
          const updateItem = { ...item, qty: cartItem.qty - 1 };
          console.log('cart qty', updateItem.qty);
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

//! Uso di Reducer

// import React, { useReducer } from 'react';

// // Definisci il tuo reducer
// function cartReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART':
//       // Logica per aggiungere un elemento al carrello
//       return { ...state, cart: [...state.cart, action.payload] };
//     case 'REMOVE_FROM_CART':
//       // Logica per rimuovere un elemento dal carrello
//       return {
//         ...state,
//         cart: state.cart.filter(item => item._id !== action.payload._id),
//       };
//     default:
//       return state;
//   }
// }

// function ButtonFunctions() {
//   // Inizializza lo stato utilizzando useReducer
//   const initialState = { cart: [] };
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   // Restituisci il tuo stato e la funzione di dispatch
//   return { state, dispatch };
// }

// export default ButtonFunctions;
