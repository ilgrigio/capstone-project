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
  // console.log('Nomi Piatti:', data.name);
  // const { addToCart, removeFromCart } = useCart();
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
        const index = updatedCart.indexOf(productToRemove);
        updatedCart.splice(index, 1);
      }

      setCart(updatedCart);
      console.log('Prodotto rimosso:', productToRemove.name);
    } else {
      console.log('Prodotto non trovato nel carrello');
    }
  };

  // const removeFromCart = () => {
  //   console.log('hai rimosso:', data.name);
  //   const updateCart = cart.filter(item => item.id !== data.id);
  //   setCart(updateCart);
  // };
  // const removeFromCart = () => {
  //   if (cart.findIndex(item => item.id !== data.id)) {
  //     setCart([...cart]);
  //     console.log('hai rimosso:', data.name, id);
  //   } else {
  //     console.log('Carrello vuoto');
  //     setCart([]);
  //   }
  // };
  // ---- STOP ----
  // handleAddToCart
  // const handleAdd = product => {
  //   console.log('handleAdd:', product);
  //   // if (!product || !product.qty) {
  //   //   product = { ...product, qty: 1 };
  //   // }
  //   addToCart(product.id);
  // };

  // const handleRemove = productId => {
  //   if (!productId || !productId.qty) {
  //     productId = { ...productId, qty: 1 };
  //   }
  //   removeFromCart(productId);
  //   console.log(`Hai rimosso: ${name}`);
  // };

  // const handleRemoveQty = product => {
  //   removeFromCart(product);
  // };

  // const [selected, setSelected] = useState(null);
  // const handleProductClick = () => {
  //   setSelected(prev => (prev === name ? 'All' : name)); // Imposta il prodotto selezionato quando viene cliccato
  // };

  return (
    <div
      className={'card align-items-center p-2'}
      style={{ minHeight: '100%' }}
      // className={`card align-items-center p-2 ${
      //   selected === name ? 'active' : ''
      // } `}
      // onClick={handleProductClick}
    >
      <img src={photo} alt={name} />
      <p>{id}</p>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Prezzo: {price}</p>
      <div className="d-flex gap-3">
        {/* <button
          onClick={() => {
            handleRemoveQty(product);
          }}
          className="btn tomato"
        >
          -
        </button> */}
        <button onClick={removeFromCart} className="btn tomato">
          -
        </button>
        {/* <button onClick={() => handleAdd(product)} className="btn tomato"> */}
        <button onClick={addToCart} className="btn tomato">
          +
        </button>
      </div>
    </div>
  );
};

export default SushiProducts;
