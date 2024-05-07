import React from 'react';
import './Sidecart.css';
import { useCart } from '../../context/CartContext';
import SushiProducts from '../singleDish/SingleDish';

const Sidecart = () => {
  const { isOpen, toggleSidecart, cart } = useCart();

  return (
    <>
      <div className={`sidebar ${isOpen ? 'sidebar--open' : 'hide'}`}>
        <div className="btn--box">
          <button className="btn side--btn" onClick={toggleSidecart}>
            Chiudi
          </button>
        </div>
        <div className="container cart-box">
          <h2>Il tuo Carrello</h2>
          {isOpen
            ? cart.map((product, idx) => (
                <div key={idx}>
                  <SushiProducts
                    data={product}
                    id={product._id}
                    name={product.name}
                    description={product.description}
                    price={product.price.$numberDecimal}
                    photo={product.photo}
                    qty={product.qty}
                  />
                </div>
              ))
            : 'Close'}
        </div>
      </div>
    </>
  );
};

export default Sidecart;

// import React from 'react';
// import './Sidecart.css';
// import { useCart } from '../../context/CartContext';

// const Sidecart = () => {
//   const { isOpen, toggleSidecart } = useCart();

//   // console.log('Sidebar open', isOpen);
//   return (
//     <div
//       className={`sidebar ${isOpen ? 'sidebar--open' : 'hide'}`}
//       onClick={toggleSidecart}
//     >
//       <h2>Il tuo Carrello</h2>
//       {isOpen ? 'Sidecart' : 'Close'}
//     </div>
//   );
// };

// export default Sidecart;
