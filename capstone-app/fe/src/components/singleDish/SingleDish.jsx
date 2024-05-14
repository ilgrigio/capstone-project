import { React } from 'react';
import { useCart } from 'react-use-cart';

const Itemcard = props => {
  const { addItem } = useCart();
  return (
    <div
      className={'card align-items-center p-2'}
      style={{ minHeight: '100%' }}
    >
      <img src={props.photo} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>Prezzo:€ {props.price}</p>
      <div className="d-flex gap-3">
        <button
          onClick={() =>
            addItem({
              id: props.id,
              name: props.name,
              price: props.price,
              photo: props.photo,
            })
          }
          className="btn tomato"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Itemcard;
