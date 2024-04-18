import React from 'react';

const SushiProducts = ({
  name,
  description,
  category,
  price,
  addedIngredients,
  photo,
}) => {
  return (
    <div className="card">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Categoria: {category}</p>
      <p>Prezzo: {price}</p>
      <p>Ingredienti aggiuntivi: {addedIngredients}</p>
    </div>
  );
};

export default SushiProducts;
