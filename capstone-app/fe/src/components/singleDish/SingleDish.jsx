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
  // qty,
}) => {
  const [selected, setSelected] = useState(null);
  const { onAdd, onRemove } = ButtonFunctions(); // Chiamata a ButtonFunction
  const handleProductClick = () => {
    setSelected((prev) => (prev === name ? 'All' : name)); // Imposta il prodotto selezionato quando viene cliccato
  };
  return (
    <div
      className={`card align-items-center p-2 ${
        selected === name ? 'active' : ''
      } `}
      onClick={handleProductClick}
    >
      <img src={photo} alt={name} />
      <p>{id}</p>
      <h2>{name}</h2>
      <p>{description}</p>
      {/* <p>Categoria: {category}</p> */}
      <p>Prezzo: {price}</p>
      <button onClick={() => onAdd(id)} className="btn">
        +
      </button>
      <button onClick={() => onRemove(id)} className="btn">
        -
      </button>
    </div>
  );
};

export default SushiProducts;
