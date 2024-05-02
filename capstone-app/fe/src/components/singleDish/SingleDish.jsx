import React from 'react';
import { useState } from 'react';

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
  const [selected, setSelected] = useState(null);
  const handleProductClick = () => {
    setSelected(prev => (prev === name ? 'All' : name)); // Imposta il prodotto selezionato quando viene cliccato
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
      {/* <p>qty:{qty}</p> */}
      {/* <p>Ingredienti aggiuntivi: {addedIngredients}</p> */}
    </div>
  );
};

export default SushiProducts;
