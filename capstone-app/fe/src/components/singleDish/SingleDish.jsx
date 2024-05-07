import { React } from 'react';
import { useCart } from '../../context/CartContext';

const SushiProducts = ({
  id,
  name,
  description,
  category,
  price,
  addedIngredients,
  photo,
  product,
  data,
}) => {
  const { cart, setCart } = useCart();
  const addToCart = () => {
    console.log('hai aggiunto:', data.name, id);
    if (Array.isArray(cart)) {
      setCart([...cart, data]);
    } else {
      setCart([data]);
    }
  };

  const removeFromCart = () => {
    const updatedCart = [...cart]; // Crea una copia del carrello
    const productToRemove = updatedCart.find(item => item.id === data.id);

    if (productToRemove) {
      // Se il prodotto è presente nel carrello
      if (productToRemove.quantity > 1) {
        // Se la quantità è maggiore di 1, sottrai 1
        productToRemove.quantity -= 1;
      } else {
        // Altrimenti, rimuovi completamente il prodotto
        updatedCart.splice(productToRemove, 1);
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
        <button onClick={removeFromCart} className="btn tomato">
          -
        </button>

        <button onClick={addToCart} className="btn tomato">
          +
        </button>
      </div>
    </div>
  );
};

export default SushiProducts;
