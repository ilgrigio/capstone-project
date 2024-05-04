import { React, useState } from 'react';
import ButtonFunctions from '../buttonFunctions/ButtonFunctions';

const SushiProducts = ({
  id,
  name,
  description,
  category,
  price,
  addedIngredients,
  photo,
  qty,
}) => {
  // const [selected, setSelected] = useState(null);
  const { onAdd, onRemove } = ButtonFunctions(); // Chiamata a ButtonFunction
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
      <p>Qty:{qty}</p>
      <div className="d-flex gap-3">
        <button onClick={() => onRemove({ id, name })} className="btn tomato">
          -
        </button>
        <button onClick={() => onAdd({ id, name })} className="btn tomato">
          +
        </button>
      </div>
    </div>
  );
};

export default SushiProducts;
