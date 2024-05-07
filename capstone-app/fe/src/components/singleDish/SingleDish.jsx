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

  // Function addToCart
  const addToCart = () => {
    console.log('hai aggiunto:', data.name, id);
    if (Array.isArray(cart)) {
      setCart([...cart, data]);
    } else {
      setCart([data]);
    }
  };

  // Function removeFromCart
  const removeFromCart = () => {
    const updatedCart = [...cart]; // Crea una copia del carrello
    const index = updatedCart.findIndex((item) => item.id === data.id); // Trova l'indice del prodotto

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
        <button onClick={() => removeFromCart(data.id)} className="btn tomato">
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
