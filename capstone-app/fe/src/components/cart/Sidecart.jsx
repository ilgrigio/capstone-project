import { React, useEffect, useState } from 'react';
import './Sidecart.css';
import { useCart } from '../../context/CartContext';

const Sidecart = () => {
  const [price, setPrice] = useState(0);
  const { isOpen, toggleSidecart, cart, setCart } = useCart();
  const [quantities, setQuantities] = useState(0);

  // Rimuovi Prodotto
  const deleteDish = (product) => {
    console.log('dish?', product);
    const arr = cart.filter((item) => item._id !== product._id);
    setCart([]);
    console.log('setCart', setCart(arr));
    deleteDish();
  };

  // Aumenta la quantità
  const increaseQuantity = (product) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [product._id]: (prevQuantities[product._id] || 0) + 1,
      };
      getTotalPrice(newQuantities); // Aggiorna il prezzo totale con le nuove quantità
      return newQuantities;
    });
  };

  // Decrementa la quantità
  const decreaseQuantity = (product) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [product._id]: Math.max((prevQuantities[product._id] || 0) - 1, 0),
      };
      getTotalPrice(); // Aggiorna il prezzo totale con le nuove quantità
      return newQuantities;
    });
  };

  // const decreaseQuantity = (product) => {
  //   console.log('hai tolto una porzione di:', product.name);
  //   setQuantities((prevQuantities) => ({
  //     ...prevQuantities,
  //     [product._id]: Math.max(prevQuantities[product._id] - 1, 0),
  //   }));
  // };
  // Prezzo totale
  const getTotalPrice = () => {
    let updatedPrice = 0;
    cart.forEach((item) => {
      const quantity = quantities[item._id] || 1; // usa quantities dallo stato
      const price = Number(item.price.$numberDecimal);
      if (!isNaN(price)) {
        updatedPrice += quantity * price;
      } else {
        console.log('Invalid price for item:', item);
      }
    });
    console.log('PRICE:', updatedPrice);
    setPrice(updatedPrice);
  };

  useEffect(() => {
    getTotalPrice();
  }, [cart, quantities]);

  return (
    <div
      className={`sidebar ${
        isOpen ? 'sidebar--open' : 'sidebar--closed'
      } col-12 col-md-6 col-sm-12`}
    >
      <div className="btn--box">
        <button className="btn side--btn text-light" onClick={toggleSidecart}>
          Chiudi
        </button>
      </div>
      <div className="cart--box">
        <h2 className="self--end my-4">Il tuo Carrello</h2>
        {isOpen
          ? cart.map((product, idx) => (
              <div key={idx} className="card--field">
                <img src={product.photo} alt={product.name} />
                <div className="name--description">
                  <h4>{product.name}</h4>
                  {/* <p>{product.description}</p> */}
                  <p>€{product.price.$numberDecimal}</p>
                </div>

                <div className="wrap--button">
                  <div className="box--button">
                    <button
                      onClick={() => decreaseQuantity(product)}
                      className="btn tomato"
                    >
                      -
                    </button>
                    <p className="m-0">
                      {quantities && quantities[product._id]
                        ? quantities[product._id]
                        : 0}
                    </p>
                    <button
                      onClick={() => increaseQuantity(product)}
                      className="btn tomato"
                    >
                      +
                    </button>
                  </div>
                  <button className="btn tomato">{deleteDish}Elimina</button>
                </div>
              </div>
            ))
          : null}
      </div>
      <div className="sidebar--footer">
        <span>Totale ordine:</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default Sidecart;
