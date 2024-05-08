import { React, useEffect } from 'react';
import { useCart } from '../../context/CartContext';

const SushiProducts = ({
  id,
  name,
  description,
  category,
  price,
  addedIngredients,
  photo,
  data,
}) => {
  const { cart, setCart } = useCart();
  // console.log('data:', data);

  // Function addToCart
  const addToCart = data => {
    console.log('hai aggiunto:', data.name, data._id);
    if (Array.isArray(cart)) {
      const existingProductIndex = cart.findIndex(
        item => item._id === data._id
      );
      if (existingProductIndex !== -1) {
        // Il prodotto esiste già nel carrello, quindi aggiorna solo la quantità
        const updatedCart = [...cart];
        updatedCart[existingProductIndex].quantity += data.quantity;
        setCart(updatedCart);
      } else {
        // Il prodotto non esiste nel carrello, quindi aggiungilo
        setCart([...cart, data]);
      }
    } else {
      data.quantity = 1;
      setCart([data]);
    }
  };

  // Function removeFromCart
  const removeFromCart = () => {
    const updatedCart = [...cart]; // Crea una copia del carrello
    const index = updatedCart.findIndex(item => item._id === data._id); // Trova l'indice del prodotto

    if (index !== -1) {
      // Se il prodotto è presente nel carrello
      const productToRemove = updatedCart[index];
      if (productToRemove.quantity > 1) {
        // Se la quantità è maggiore di 1, sottrai 1
        productToRemove.quantity -= 1;
      } else {
        // Altrimenti, rimuovi completamente il prodotto
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
      console.log('Prodotto rimosso:', productToRemove.name);
    } else {
      console.log('Prodotto non trovato nel carrello');
    }
  };

  return (
    <div
      className={'card align-items-center p-2'}
      style={{ minHeight: '100%' }}
    >
      <img src={photo} alt={name} />
      <p>{id}</p>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Prezzo: {price}</p>
      <div className="d-flex gap-3">
        <button onClick={() => removeFromCart(data)} className="btn tomato">
          -
        </button>

        <button onClick={() => addToCart(data)} className="btn tomato">
          +
        </button>
      </div>
    </div>
  );
};

export default SushiProducts;
