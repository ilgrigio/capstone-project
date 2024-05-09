import { React, useEffect, useState } from 'react';
import './Sidecart.css';
import { useCart } from '../../context/CartContext';

const Sidecart = () => {
  const [price, setPrice] = useState(0);
  const { isOpen, toggleSidecart, cart, setCart } = useCart();
  const [quantities, setQuantities] = useState(0);

  // Rimuovi Prodotto
  const deleteDish = product => {
    console.log('dish?', product);
    const arr = cart.filter(item => item._id !== product._id);
    setCart(arr);
    console.log('setCart', setCart(arr));
    deleteDish();
  };

  // Aumenta la quantità
  const increaseQuantity = product => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [product._id]: (prevQuantities[product._id] || 0) + 1,
    }));
  };
  // console.log('prodotto +', product);

  // Decrementa la quantità
  const decreaseQuantity = product => {
    console.log('hai tolto una porzione di:', product.name);
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [product._id]: Math.max(prevQuantities[product._id] - 1, 0),
    }));
  };
  // Prezzo totale
  const getTotalPrice = product => {
    let updatedPrice = 0;
    cart.map((item, index) => {
      const quantity = quantities[index] || 1;
      if (product) {
        console.log('p', product);
        item.price = product.price; // Se non è fornita una quantità, impostala a 1
        updatedPrice += quantity * item.price;
      }
    });
    console.log('QTY:', quantities);
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
                {/* <span>{product._id}</span> */}
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
                      {quantities ? quantities[product._id] : 0}
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
