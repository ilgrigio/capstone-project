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
}) => {
  const { addToCart, removeFromCart } = useCart();
  const handleAdd = product => {
    if (!product || !product.qty) {
      product = { ...product, qty: 1 };
    }
    addToCart(product);
    console.log(`hai aggiunto:, ${name}`);
  };

  const handleRemove = productId => {
    removeFromCart(productId);
    console.log(`hai rimosso:${name}`);
  };
  // const handleAdd = product => {
  //   addToCart(product);
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
        {/* onClick={() => onRemove({ id, name })} */}
        <button onClick={() => handleRemove(product)} className="btn tomato">
          -
        </button>
        <button onClick={() => handleAdd(product)} className="btn tomato">
          +
        </button>
      </div>
    </div>
  );
};

export default SushiProducts;
